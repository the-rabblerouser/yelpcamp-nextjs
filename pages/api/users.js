import nextConnect from 'next-connect';
import crypto from 'crypto';

import dbConnect from '../../utils/mongodb';
import User from '../../models/user';
const handler = nextConnect();

handler.post(async (req, res) => {
	await dbConnect();

	const { email, username, password } = req.body;
	const salt = crypto.randomBytes(16).toString('hex');
	const hash = crypto
		.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
		.toString('hex');

	const user = new User({
		email,
		username,
		password: hash,
		salt: salt,
	});

	await user.save();
});

export default handler;
