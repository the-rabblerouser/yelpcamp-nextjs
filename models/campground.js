import mongoose, { Schema } from 'mongoose';

const CampgroundSchema = new Schema({
	title: String,
	image: String,
	price: Number,
	description: String,
	location: String,
	reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

export default mongoose.models.Campground ||
	mongoose.model('Campground', CampgroundSchema);