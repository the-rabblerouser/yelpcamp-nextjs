import { connectToDatabase } from '../../utils/mongodb';

export default async (req, res) => {
	const { method } = req;
	const { db } = await connectToDatabase();

	switch (method) {
		case 'GET':
			try {
				const campgrounds = await db
					.collection('campgrounds')
					.find({})
					.sort({ metacritic: -1 })
					.limit(20)
					.toArray();

				res.json(campgrounds);
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		// Test for POST Route
		// case 'GET':
		// 	try {
		// 		const campgrounds = await db.collection('campgrounds').insert({
		// 			title: 'Camp Bob',
		// 			price: '$20',
		// 			description: 'This is a camp for people',
		// 			location: 'home',
		// 		});

		// 		res.send(campgrounds);
		// 	} catch (error) {
		// 		res.status(400).json({ success: false });
		// 	}
	}
};
