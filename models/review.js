import mongoose, { Schema } from 'mongoose';
import User from './user';

const reviewSchema = new Schema({
	body: String,
	rating: String,
	author: { type: Schema.Types.ObjectId, ref: User },
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
