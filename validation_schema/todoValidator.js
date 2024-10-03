const Joi = require('joi');

const TodoSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Title is required',
        'any.required': 'Title is required',
    }),
    description: Joi.string().optional(),
    status: Joi.boolean().optional(),
});


module.exports = { TodoSchema };