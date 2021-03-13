import nextConnect from 'next-connect';

import dbConnect from '../../utils/mongodb';
import { campgroundSchema } from '../../utils/joiSchema';
import Campground from '../../models/campground';

const handler = nextConnect();

handler
	.get(async (req, res) => {
		await dbConnect();

		try {
			const campgrounds = await Campground.find({});
			res.json(campgrounds);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	})
	.post(async (req, res) => {
		await dbConnect();

		const { value, error } = campgroundSchema.validate(req.body);

		if (error) {
			const msg = error.details
				.map(({ message }) => `400 Bad Request: ${message}`)
				.join(',');
			return res.status(400).send(msg);
		}

		const campgrounds = await Campground.create(value);

		res.send(campgrounds);
	});

export default handler;
