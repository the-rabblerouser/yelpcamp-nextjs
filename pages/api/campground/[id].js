import nextConnect from 'next-connect';
import Joi from 'joi';

import { connectToDatabase } from '../../../utils/mongodb';

let ObjectID = require('mongodb').ObjectID;

const handler = nextConnect();

handler
	.get(async (req, res) => {
		const { db } = await connectToDatabase();
		const {
			query: { id },
		} = req;

		try {
			const campground = await db
				.collection('campgrounds')
				.find({ _id: new ObjectID(id) })
				.toArray();

			res.json(campground);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	})
	.put(async (req, res) => {
		const { db } = await connectToDatabase();
		const {
			query: { id },
		} = req;
		const campgroundSchema = Joi.object({
			title: Joi.string().required(),
			location: Joi.string().required(),
			description: Joi.string().required(),
			price: Joi.number().required().min(0),
			image: Joi.string().required(),
		}).required();

		const { value, error } = campgroundSchema.validate(req.body);

		if (error) {
			const msg = error.details
				.map(({ message }) => `400 Bad Request: ${message}`)
				.join(',');
			return res.status(400).send(msg);
		}

		const campground = await db.collection('campgrounds').findOneAndUpdate(
			{ _id: new ObjectID(id) },
			{
				$set: {
					title: value.title,
					location: value.location,
					description: value.description,
					price: value.price,
					image: value.image,
				},
			},
			{
				new: true,
			}
		);

		return res.json(campground);
	})
	.delete(async (req, res) => {
		const { db } = await connectToDatabase();
		const {
			query: { id },
		} = req;
		try {
			const campground = await db.collection('campgrounds').deleteOne(
				{ _id: new ObjectID(id) },
				{ $set: { title: req.body.title, location: req.body.location } },
				{
					new: true,
				}
			);

			res.json(campground);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	});

export default handler;

// export default async (req, res) => {
// 	const { db } = await connectToDatabase();
// 	const {
// 		query: { id },
// 		method,
// 	} = req;

// 	switch (method) {
// 		case 'GET':
// 			try {
// 				const campground = await db
// 					.collection('campgrounds')
// 					.find({ _id: new ObjectID(id) })
// 					.toArray();

// 				res.json(campground);
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}

// 			break;
// 		case 'PUT':
// 			const campgroundSchema = Joi.object({
// 				title: Joi.string().required(),
// 				location: Joi.string().required(),
// 				description: Joi.string().required(),
// 				price: Joi.number().required().min(0),
// 				image: Joi.string().required(),
// 			}).required();

// 			const { value, error } = campgroundSchema.validate(req.body);

// 			if (error) {
// 				const msg = error.details
// 					.map(({ message }) => `400 Bad Request: ${message}`)
// 					.join(',');
// 				return res.status(400).send(msg);
// 			}

// 			const campground = await db.collection('campgrounds').findOneAndUpdate(
// 				{ _id: new ObjectID(id) },
// 				{
// 					$set: {
// 						title: value.title,
// 						location: value.location,
// 						description: value.description,
// 						price: value.price,
// 						image: value.image,
// 					},
// 				},
// 				{
// 					new: true,
// 				}
// 			);

// 			return res.json(campground);

// 			break;
// 		case 'DELETE':
// 			try {
// 				const campground = await db.collection('campgrounds').deleteOne(
// 					{ _id: new ObjectID(id) },
// 					{ $set: { title: req.body.title, location: req.body.location } },
// 					{
// 						new: true,
// 					}
// 				);

// 				res.json(campground);
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}
// 			break;
// 		default:
// 			res.setHeader('Allow', ['GET', 'PUT']);
// 			res.status(405).end(`Method ${method} Not Allowed`);
// 	}
// };
