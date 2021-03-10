import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
	body: String,
	rating: String,
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
