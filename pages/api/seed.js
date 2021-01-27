import { connectToDatabase } from '../../utils/mongodb';
const cities = require('../../utils/seed_data/cities');
const { places, descriptors } = require('../../utils/seed_data/seedHelpers');

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const sample = (array) => array[Math.floor(Math.random() * array.length)];

	try {
		//**************************!!!WARNING!!!*******************************
		// !!!Uncommenting will remove all data in seed database!!!

		// const remove_data = await db.collection('campgrounds').deleteMany();
		// res.send(remove_data);

		// *********************************************************************

		for (let i = 0; i < 50; i++) {
			const random1000 = Math.floor(Math.random() * 1000);
			const camp = {
				location: `${cities[random1000].city}, ${cities[random1000].state}`,
				title: `${sample(descriptors)} ${sample(places)}`,
			};
			const campgrounds = await db.collection('campgrounds').insert(camp);
			res.send(campgrounds);
		}
	} catch (error) {
		res.status(400).json({ success: false });
	}
};
