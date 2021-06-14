import nextConnect from 'next-connect';

import dbConnect from '../../../../../utils/mongodb';
import mongoose from 'mongoose';
import { reviewSchema } from '../../../../../utils/joiSchema';
import Campground from '../../../../../models/campground';
import Review from '../../../../../models/review';

const handler = nextConnect();

handler.post(async (req, res) => {
	await dbConnect();

	const {
		query: { id },
	} = req;

	const { value, error } = reviewSchema.validate(req.body);

	if (error) {
		const msg = error.details
			.map(({ message }) => `400 Bad Request: ${message}`)
			.join(',');
		return res.status(400).send(msg);
	}

	const campground = await Campground.findById(id);

	const review = new Review(value);

	campground.reviews.push(review);

	await review.save();
	await campground.save();
});

export default handler;
