//This handles authentication
const LocalStrategy = require('passport-local').Strategy;
const UserRegister = require('../models/userRegist_model');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
// const registermodel = require('../models/registermodel');

module.exports = (passport) =>{
    // Local strategy
    passport.use(new LocalStrategy(function(email, password, done){
      // match username
      let query = { email: email };
      UserRegister.findOne(query, function(err, registermodel){
        if(err) throw err;
  
        if(!registermodel) {
          return done(null, false, { message: 'No user found' });
        }
  // Match password
  bcrypt.compare(password, registermodel.password, function(err, isMatch){
    if (err) throw err;
    if(isMatch) {
      return done(null, registermodel);
    } else {
      return done(null, false, { message: 'Wrong password' });
    }
  });
})
})); 

passport.serializeUser(function(registermodel, done) {
    done(null, registermodel.id);
  });

  passport.deserializeUser(function(id, done) {
    UserRegister.findById(id, function(err, registermodel) {
      done(err, registermodel);
    });
  });
};



