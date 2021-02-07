import { connectToDatabase } from '../../utils/mongodb';
const cities = require('../../utils/seed_data/cities');
const { places, descriptors } = require('../../utils/seed_data/seedHelpers');

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const sample = (array) => array[Math.floor(Math.random() * array.length)];

	try {
		//**************************!!!WARNING!!!*******************************
		// !!!Uncommenting will remove all data in seed database!!!

		// await db.collection('campgrounds').deleteMany();

		// *********************************************************************

		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;

		const camp = {
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			image: 'https://source.unsplash.com/collection/2184453',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			price,
		};
		const campgrounds = await db.collection('campgrounds').insert(camp);
		res.send(campgrounds);

		// *********************************************************************
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// const campground = () => {
// 	for (let i = 0; i < 50; i++) {
// 		const random1000 = Math.floor(Math.random() * 1000);
// 		const price = Math.floor(Math.random() * 20) + 10;

// 		return {
// 			location: `${cities[random1000].city}, ${cities[random1000].state}`,
// 			title: `${sample(descriptors)} ${sample(places)}`,
// 			image: 'https://source.unsplash.com/random',
// 			description:
// 				'Lorem ipsum dolor sit amet consectetur adipisicing elit',
// 			price,
// 		};
// 	}
// };
// const campgrounds = await db
// 	.collection('campgrounds')
// 	.insertMany(campground);
// res.send(campgrounds);
