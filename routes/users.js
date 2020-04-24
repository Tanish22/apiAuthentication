const express = require('express');
//  const router = express.Router;

//  using promise-router allows us to write clean functions without try & catch block as it wraps our
//  function code around them
const router = require('express-promise-router')(); 

const UsersController = require('../controllers/users');

const { validateBody, schemas } = require('../helpers/routeHelpers')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp); 
//  express will call this validateBody middleware with schemas.authSchema as its only parameter when signup is called 

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret') 
    .get(UsersController.secret);

module.exports = router;