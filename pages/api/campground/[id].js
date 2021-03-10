// import nextConnect from 'next-connect';
// import Joi from 'joi';

// import { connectToDatabase } from '../../../utils/mongodb';

// let ObjectID = require('mongodb').ObjectID;

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
	});
// .delete(async (req, res) => {
// 	const { db } = await connectToDatabase();
// 	const {
// 		query: { id },
// 	} = req;
// 	try {
// 		const campground = await db.collection('campgrounds').deleteOne(
// 			{ _id: new ObjectID(id) },
// 			{ $set: { title: req.body.title, location: req.body.location } },
// 			{
// 				new: true,
// 			}
// 		);

// 		res.json(campground);
// 	} catch (error) {
// 		res.status(400).json({ success: false });
// 	}
// });

export default handler;
