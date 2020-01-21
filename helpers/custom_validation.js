const Joi = require('@hapi/joi');

module.exports.userValidation = Joi.object({
    firstName: Joi.string().min(3).max(10).required(),

    lastName: Joi.string().min(3).max(10),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    phoneNo: Joi.string().min(10).max(10).required(),

    emailId: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports.validation = (objSchema) => (req, res, next) => {
    const result = objSchema.validate(req.body, { abortEarly: false })
    if (result.error) {
        return res.status(400).json({ error: result.error });
    }
    else {
        return next();
    }
}

