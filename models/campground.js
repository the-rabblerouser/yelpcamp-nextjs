import mongoose, { Schema } from 'mongoose';
import Review from './review';

// if ref is a string and not the Review schema, it will return null when server is restarted

const CampgroundSchema = new Schema({
	title: String,
	image: String,
	price: Number,
	description: String,
	location: String,
	reviews: [{ type: Schema.Types.ObjectId, ref: Review }],
});

export default mongoose.models.Campground ||
	mongoose.model('Campground', CampgroundSchema);
