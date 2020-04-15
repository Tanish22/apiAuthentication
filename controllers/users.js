//  using promise-router allowed us to write clean functions without try & catch block as it wraps our
//  function code around them

module.exports = {
  signUp : async (req, res, next) => {
    console.log("usersController.signUp() called !"); // validating email & password required
  },

  signIn : async (req, res, next) => {
    console.log("usersController.signIn() called !"); // generate token
  },

  secret : async (req, res, next) => {
    console.log("usersController.secret() called !");
  }
};