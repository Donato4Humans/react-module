import * as Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        'string.pattern.base':'Only chars allowed',
    }),
    password: Joi.string().min(3).max(6).required().messages({
        'string.min': 'Pass must be at least 3 characters',
        'string.max': 'Pass must be less than 6 characters',
    }),
    age: Joi.number().min(1).max(120).required().messages({
        'number.min': 'Age must be at least 1',
        'number.max': 'Age must be less than 120',
    }),
})

export {
    userValidator
}