import nextConnect from 'next-connect';

import dbConnect from '../../../utils/mongodb';
import Campground from '../../../models/campground';

const handler = nextConnect();

handler
	.get(async (req, res) => {
		await dbConnect();

		const {
			query: { id },
		} = req;

		try {
			const campground = await Campground.findById(id);
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

		const campground = await Campground.findByIdAndUpdate(id, { ...req.body });

		res.json(campground);
	})
	.delete(async (req, res) => {
		await dbConnect();

		const {
			query: { id },
		} = req;

		await Campground.findByIdAndDelete(id);
	});

export default handler;
