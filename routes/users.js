const express = require('express');
// const router = express.Router;
const router = require('express-promise-router')(); // wraps our code in try and catch block and catch block
// calls the error {next(error)}

const UsersController = require('../controllers/users');

const { validateBody, schemas} = require('../helpers/routeHelpers')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp); 
        //  express will call this validateBody with schemas.authSchema as its only parameter when signup is called 

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(UsersController.secret);

module.exports = router;