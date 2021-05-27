import mongoose, { Schema } from 'mongoose';
// import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// username and password get created through passportLocalMongoose

// UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);
