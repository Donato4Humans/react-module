import * as Joi from "joi";

const userLoginValidator = Joi.object({
    username: Joi.string().min(5).max(15).required().messages({
        'string.pattern.base':'Only chars allowed',
        'string.min': 'username must be at least 5 characters',
        'string.max': 'username must be less than 15 characters',
    }),
    password: Joi.string().min(6).max(15).required().messages({
        'string.min': 'pass must be at least 6 characters',
        'string.max': 'pass must be less than 15 characters',
    }),
    expiresInMins: Joi.number().min(1).max(120).messages({
        'number.min': 'expiredInMins must be at least 1',
        'number.max': 'expiredInMins must be less than 120',
    }),
})

export {
    userLoginValidator
}