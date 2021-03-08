import nextConnect from 'next-connect';
import Joi from 'joi';

import { connectToDatabase } from '../../../../utils/mongodb';

let ObjectID = require('mongodb').ObjectID;

const handler = nextConnect();

handler.post(async (req, res) => {
	const { db } = await connectToDatabase();

	// const {
	// 	query: { id },
	// } = req;

	const reviewSchema = Joi.object({
		rating: Joi.string().required(),
		body: Joi.string().required(),
	}).required();

	const { value, error } = reviewSchema.validate(req.body);

	if (error) {
		const msg = error.details
			.map(({ message }) => `400 Bad Request: ${message}`)
			.join(',');
		return res.status(400).send(msg);
	}

	const newReview = await db.collection('review').insertOne(value);

	res.write(newReview);

	// const updateCampground = await db.collection('campgrounds').findOneAndUpdate(
	// 	{ _id: new ObjectID(id) },
	// 	{
	// 		$push: {
	// 			reviews: {
	// 				$ref: 'review',
	// 				$id: new ObjectId(),
	// 			},
	// 		},
	// 	}
	// );
	// return res.send(updateCampground);

	return res.end();
});

export default handler;
