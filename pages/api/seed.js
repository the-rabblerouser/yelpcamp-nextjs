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
			const price = Math.floor(Math.random * 20) + 10;
			const camp = {
				location: `${cities[random1000].city}, ${cities[random1000].state}`,
				title: `${sample(descriptors)} ${sample(places)}`,
				image:
					'https://images.unsplash.com/photo-1505861957672-3977f8d3e0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
				price,
			};
			const campgrounds = await db.collection('campgrounds').insert(camp);
			res.send(campgrounds);
		}
		// *********************************************************************
	} catch (error) {
		res.status(400).json({ success: false });
	}
};
