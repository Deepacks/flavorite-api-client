const User = require("../models/UserModel");
const localStrategy = require("passport-local").Strategy;
const validPassword = require("../lib/passwordUtils").validPassword;
// -------------- STRATEGY CONFIG --------------

const config = (passport) => {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        const isValid = validPassword(password, user.hash, user.salt);
        if (isValid) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );

  // -------------- SERIALISATION CONFIG --------------

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};

module.exports = config;
