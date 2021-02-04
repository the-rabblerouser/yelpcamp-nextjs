import { connectToDatabase } from '../../../utils/mongodb';

let ObjectID = require('mongodb').ObjectID;

export default async (req, res) => {
	const { db } = await connectToDatabase();
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case 'GET':
			try {
				const campground = await db
					.collection('campgrounds')
					.find({ _id: new ObjectID(id) })
					.toArray();

				res.json(campground);
			} catch (error) {
				res.status(400).json({ success: false });
			}

			break;
		case 'PUT':
			try {
				const campground = await db.collection('campgrounds').findOneAndUpdate(
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
			break;
		default:
			res.setHeader('Allow', ['GET', 'PUT']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};
