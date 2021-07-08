const User = require("../models/UserModel");

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send({ status: 0 });
  }
};

const isUser = (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.send({ status: 0 });
    } else {
      next();
    }
  });
};

module.exports.isAuth = isAuth;
module.exports.isUser = isUser;
