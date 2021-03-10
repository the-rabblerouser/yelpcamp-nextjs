import nextConnect from 'next-connect';

import dbConnect from '../../utils/mongodb';
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

		try {
			const campground = await Campground.create(req.body);
			res.status(201).json(campground);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	});

export default handler;
