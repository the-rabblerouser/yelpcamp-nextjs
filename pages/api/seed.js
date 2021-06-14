import dbConnect from '../../utils/mongodb';
import Campground from '../../models/campground';
const cities = require('../../utils/seed_data/cities');
const { places, descriptors } = require('../../utils/seed_data/seedHelpers');

export default async (req, res) => {
	await dbConnect();

	try {
		await Campground.deleteMany({});

		const sample = (array) => array[Math.floor(Math.random() * array.length)];

		for (let i = 0; i < 50; i++) {
			const random1000 = Math.floor(Math.random() * 1000);

			const price = Math.floor(Math.random() * 20) + 10;

			const camp = new Campground({
				location: `${cities[random1000].city}, ${cities[random1000].state}`,
				author: '60bcfe39c120d573987675f8',
				title: `${sample(descriptors)} ${sample(places)}`,
				image: 'https://source.unsplash.com/collection/2184453',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
				price,
			});

			await camp.save();
		}
	} catch (error) {
		res.status(400).json({ success: false });
	}
};
