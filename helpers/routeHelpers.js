const Joi = require('joi');

module.exports = {

    //  this function is used for validating the schema thats passed as a parameter from the schemas object
    validateBody : (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

            if(result.error){   //  joi returns an error property
                return res.status(400).json(result.error);
            }                     
            
            //  if no error, we attach value property to req object and body property to req.value
            
            //  first checked if req.value exists & if it doesnt, then initialize it empty obj.
            if(!req.value) { req.value = {}; }

            req.value['body'] = result.value;   //  adding body property to req.value obj dynamically
            next();
        }
    },

    //  this object will take all the schemas required by different controllers i.e. authSchema, 
    schemas : {
        authSchema : Joi.object().keys({
            email : Joi.string().email().required(),    //  properties to be validated
            password : Joi.string().required().min(5).max(20)
        }) 
    }
}