const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;  //   specify the strategy
const {ExtractJwt} = require('passport-jwt');

const {JWT_SECRET} = require('./configuration');
const User = require('./models/users')

passport.use(new JwtStrategy({

    //  specifies where the token resides inside the request object 
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    //  extracting jwt from authorization header
    
    //  the secret key to decode token
    secretOrKey : JWT_SECRET
}, async (payload, done) => {
    try{
        //  find the user specified in the token (payload.sub : from users controllers module)
        const user = await User.findById(payload.sub);

        if(!user){            
            return done(null, false);
        }

        done(null, user)
    }
    catch(error){
        done(error, false)
    }
}))  