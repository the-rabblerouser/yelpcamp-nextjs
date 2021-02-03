import { connectToDatabase } from '../../../utils/mongodb';

let ObjectID = require('mongodb').ObjectID;

export default async (req, res) => {
	const { db } = await connectToDatabase();
	const {
		query: { id, title, location },
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
		//   case 'PUT':
		//     // Update or create data in your database
		//     res.status(200).json({ id, name: name || `User ${id}` })
		//     break
		// default:
		// 	res.setHeader('Allow', ['GET']);
		// 	res.status(405).end(`Method ${method} Not Allowed`);
	}
};
