const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');
const ApiError = require('../models/api-error.model');

module.exports.doLogin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    next(ApiError('Email and password are required', 400));
  } else {
    passport.authenticate('local-auth', (err, user, message) => {
      if (err) {
        next(err);
      } else if (!user) {
        next(new ApiError(message, 401));
      } else {
        req.login(user, (err) => {
          if (err) {
            next(err);
          } else {
            res.json(user);
          }
        });
      }
    })(req, res, next);
  }
};