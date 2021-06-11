import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	name: String,
	image: String,
	createdAt: Date,
	updatedAt: Date,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
