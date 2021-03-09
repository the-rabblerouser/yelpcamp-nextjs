import mongoose, { Schema } from 'mongoose';

const CampgroundSchema = new Schema({
	title: String,
	images: String,
	price: Number,
	description: String,
	location: String,
});

export default mongoose.models.Campground ||
	mongoose.model('Campground', CampgroundSchema);
