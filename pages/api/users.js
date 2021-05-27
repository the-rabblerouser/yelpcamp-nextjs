import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';

import dbConnect from '../../utils/mongodb';
import User from '../../models/user';
const handler = nextConnect();

handler.post(async (req, res) => {
	await dbConnect();

	const { email, username, password } = req.body;
	const hash = await bcrypt.hash(password, 12);

	const user = new User({
		email,
		username,
		password: hash,
	});

	await user.save();
});

export default handler;
