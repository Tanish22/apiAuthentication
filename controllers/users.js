const JWT = require('jsonwebtoken')
const User = require('../models/users');

const {JWT_SECRET} = require('../configuration/index')

const signToken = (user) => {
  return JWT.sign(
    {
      iss: "Tanish",
      sub: user._id,
      iat: new Date().getTime(), //  current date
      exp: new Date().setDate(new Date().getDate() + 1), // current date + 1 day
    },
    JWT_SECRET
  );
}

module.exports = {
  signUp : async (req, res, next) => {    
    const { email, password } = req.value.body;

    const foundUser = await User.findOne({email})

    if(foundUser){
      return res.status(403).json({ error : 'Email already in use'})
    }
    
    //const user = new User(req.body);

    const newUser = new User({ email, password }); 

    await newUser.save();   
    
    const token = signToken(newUser);

     //  respond with a token     
     res.status(200).json({token});

     console.log({token});
     
  },

  signIn : async (req, res, next) => {
    console.log("usersController.signIn() called !"); // generate token
  },

  secret : async (req, res, next) => {
    console.log("usersController.secret() called !");
  }
}; 