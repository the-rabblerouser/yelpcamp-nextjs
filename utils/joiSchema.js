import Joi from 'joi';

module.exports.campgroundSchema = Joi.object({
	title: Joi.string().required(),
	location: Joi.string().required(),
	description: Joi.string().required(),
	price: Joi.number().required().min(0),
	image: Joi.string().required(),
}).required();

module.exports.reviewSchema = Joi.object({
	rating: Joi.string().required(),
	body: Joi.string().required(),
	author: Joi.string().required(),
}).required();
