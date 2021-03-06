import nextConnect from 'next-connect';

import dbConnect from '../../../utils/mongodb';
import { campgroundSchema } from '../../../utils/joiSchema';
import Campground from '../../../models/campground';

const handler = nextConnect();

handler
	.get(async (req, res) => {
		await dbConnect();

		const {
			query: { id },
		} = req;

		try {
			const campground = await Campground.findById(id)
				.populate({
					path: 'reviews',
					populate: {
						path: 'author',
					},
				})
				.populate('author');

			res.json(campground);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	})
	.put(async (req, res) => {
		await dbConnect();

		const {
			query: { id },
		} = req;

		const { value, error } = campgroundSchema.validate(req.body);

		if (error) {
			const msg = error.details
				.map(({ message }) => `400 Bad Request: ${message}`)
				.join(',');
			return res.status(400).send(msg);
		}

		const campground = await Campground.findById(id);

		if (!campground.author.equals(id)) {
			return res.redirect(`/campground/${id}`);
		}

		const camp = await Campground.findByIdAndUpdate(id, { ...value });

		res.json(camp);
	})
	.delete(async (req, res) => {
		await dbConnect();

		const {
			query: { id },
		} = req;

		const campground = await Campground.findById(id);

		if (!campground.author.equals(id)) {
			return res.redirect(`/campground/${id}`);
		}

		await Campground.findByIdAndDelete(id);
	});

export default handler;
