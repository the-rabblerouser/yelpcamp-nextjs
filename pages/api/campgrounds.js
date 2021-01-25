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
				expect(error).toBeNull();
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				// const campgrounds = await db
				// .collection("campgrounds")
				// .find({})
				// .sort({ metacritic: -1 })
				// .limit(20)
				// .toArray();

				res.json(campgrounds);
			} catch (error) {
				res.status(400).json({ success: false });
			}
	}
};
