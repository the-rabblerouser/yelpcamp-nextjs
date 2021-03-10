import nextConnect from 'next-connect';

import Joi from 'joi';
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

		const campgrounds = await Campground.create(value);

		res.send(campgrounds);

		// try {
		// 	const campground = await Campground.create(value);
		// 	res.status(201).json(campground);
		// } catch (error) {
		// 	res.status(400).json({ success: false });
		// }
	});

export default handler;
