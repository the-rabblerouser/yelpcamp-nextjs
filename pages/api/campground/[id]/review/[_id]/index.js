import nextConnect from 'next-connect';

import dbConnect from '../../../../../../utils/mongodb';

import Campground from '../../../../../../models/campground';
import Review from '../../../../../../models/review';

const handler = nextConnect();

handler.delete(async (req, res) => {
	await dbConnect();

	const {
		query: { id, _id },
	} = req;

	await Campground.findByIdAndUpdate(id, { $pull: { reviews: _id } });
	await Review.findByIdAndDelete(_id);
});

export default handler;
