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
					.sort()
					.limit(20)
					.toArray();

				res.json(campgrounds);
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		case 'POST':
			try {
				const campgrounds = await db.collection('campgrounds').insert({
					title: req.body.title,
					location: req.body.location,
				});

				res.send(campgrounds);
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};
