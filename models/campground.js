import mongoose, { Schema } from 'mongoose';
import Review from './review';
import User from './user';

// if ref is a string and not the Review schema, it will return null when server is restarted

const CampgroundSchema = new Schema({
	title: String,
	image: String,
	price: Number,
	description: String,
	location: String,
	author: { type: Schema.Types.ObjectId, ref: User },
	reviews: [{ type: Schema.Types.ObjectId, ref: Review }],
});

export default mongoose.models.Campground ||
	mongoose.model('Campground', CampgroundSchema);
