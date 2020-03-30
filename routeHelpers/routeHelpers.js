const joi = require('joi');

module.exports = {
    validateBody : (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema)
        }
    },

    schemas : {
        authSchema : joi.object().keys({
            email : Joi.string().email().required(),
            password : Joi.string().required().min(5).max(10)
        }) 
    }
}