// import nextConnect from 'next-connect';
// import Joi from 'joi';

// import { connectToDatabase } from '../../../utils/mongodb';

// let ObjectID = require('mongodb').ObjectID;

import nextConnect from 'next-connect';

import dbConnect from '../../../utils/mongodb';
import Campground from '../../../models/campground';

const handler = nextConnect();

handler.get(async (req, res) => {
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
});
// .put(async (req, res) => {
// 	const { db } = await connectToDatabase();
// 	const {
// 		query: { id },
// 	} = req;
// 	const campgroundSchema = Joi.object({
// 		title: Joi.string().required(),
// 		location: Joi.string().required(),
// 		description: Joi.string().required(),
// 		price: Joi.number().required().min(0),
// 		image: Joi.string().required(),
// 	}).required();

// 	const { value, error } = campgroundSchema.validate(req.body);

// 	if (error) {
// 		const msg = error.details
// 			.map(({ message }) => `400 Bad Request: ${message}`)
// 			.join(',');
// 		return res.status(400).send(msg);
// 	}

// 	const campground = await db.collection('campgrounds').findOneAndUpdate(
// 		{ _id: new ObjectID(id) },
// 		{
// 			$set: {
// 				title: value.title,
// 				location: value.location,
// 				description: value.description,
// 				price: value.price,
// 				image: value.image,
// 			},
// 		},
// 		{
// 			new: true,
// 		}
// 	);

// 	return res.json(campground);
// })
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
