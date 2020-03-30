module.exports = {
  signUp : async (req, res, next) => {
    console.log("usersController.signUp() called !"); // email & password
  },

  signIn : async (req, res, next) => {
    console.log("usersController.signIn() called !"); // generate token
  },

  secret : async (req, res, next) => {
    console.log("usersController.secret() called !");
  }
};