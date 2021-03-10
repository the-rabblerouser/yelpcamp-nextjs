import nextConnect from 'next-connect';

import dbConnect from '../../../../utils/mongodb';
import Campground from '../../../../models/campground';
import Review from '../../../../models/review';

const handler = nextConnect();

handler.post(async (req, res) => {
	await dbConnect();

	const {
		query: { id },
	} = req;

	const campground = await Campground.findById(id);

	const review = new Review(req.body);

	campground.reviews.push(review);

	await review.save();
	await campground.save();

	return res.end();
});

export default handler;
