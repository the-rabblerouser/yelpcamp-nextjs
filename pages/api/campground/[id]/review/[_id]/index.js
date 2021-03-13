import nextConnect from 'next-connect';
// import Joi from 'joi';

// import dbConnect from '../../../utils/mongodb';
// import { reviewSchema } from '../../../utils/joiSchema';
// import Campground from '../../../models/campground';
// import Review from '../../../models/review';

const handler = nextConnect();

handler.delete(async (req, res) => {
	const {
		query: { id, _id },
	} = req;

	console.log(id, _id);
});

export default handler;
