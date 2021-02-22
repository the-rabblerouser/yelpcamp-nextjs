import nextConnect from 'next-connect';
import Joi from 'joi';

import { connectToDatabase } from '../../utils/mongodb';

const handler = nextConnect();

handler
	.get(async (req, res) => {
		const { db } = await connectToDatabase();
		try {
			const campgrounds = await db
				.collection('campgrounds')
				.find({})
				.sort()
				.limit(20)
				.toArray();

			res.json(campgrounds);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	})
	.post(async (req, res) => {
		const { db } = await connectToDatabase();
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

		const campgrounds = await db.collection('campgrounds').insertOne(value);

		return res.send(campgrounds);
	});

export default handler;

// const Campground = async (req, res) => {
// 	const { method } = req;
// 	const { db } = await connectToDatabase();

// 	switch (method) {
// 		case 'GET':
// 			try {
// 				const campgrounds = await db
// 					.collection('campgrounds')
// 					.find({})
// 					.sort()
// 					.limit(20)
// 					.toArray();

// 				res.json(campgrounds);
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}
// 			break;

// 		case 'POST':
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

// 			const campgrounds = await db.collection('campgrounds').insertOne(value);

// 			return res.send(campgrounds);

// 			break;
// 		default:
// 			res.setHeader('Allow', ['GET', 'POST']);
// 			res.status(405).end(`Method ${method} Not Allowed`);
// 	}
// };

// export default Campground;
