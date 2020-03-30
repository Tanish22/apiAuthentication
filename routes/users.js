const express = require('express');
// const router = express.Router;
const router = require('express-promise-router')(); // wraps our code in try block

const usersController = require('../controllers/users');

router.route('/signup')
    .post(usersController.signUp); 

router.route('/signin')
    .post(usersController.signIn);

router.route('/secret')
    .get(usersController.secret);

module.exports = router;