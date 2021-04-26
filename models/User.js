import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.models.User || mongoose.model('User', UserSchema);
