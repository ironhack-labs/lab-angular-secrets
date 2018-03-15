const User = require('../models/user');
const localStrategy = require('passport-local').Strategy;
const ApiError = require('../models/api-error.model');

module.exports.setup = (passport) => {
  passport.serializeUser((user, next) => {
    next(null, user._id);
  });
  passport.deserializeUser((id, next) => {
    User.findById(id)
      .then(user => {
        next(null, user);
      })
      .catch(error => next(error));
  });
  passport.use('local-auth', new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, next) => {
    User.findOne({
        username: username
      })
      .then(user => {
        if (!user) {
          next(null, null, {
            password: "invalid username of password"
          });
        } else {
          user.checkPassword(password)
            .then(match => {
              if (match) {
                next(null, user);
              } else {
                next(null, null, {
                  password: "invalid username of password"
                });
              }
            })
            .catch(error => next(error));
        }
      }).catch(error => next(error));
  }));
};

//esto estaba en secure.config.js que hemos eliminado
module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated) {
    next();
  } else {
    next(new ApiError('Unauthorized', 403));
  }
};