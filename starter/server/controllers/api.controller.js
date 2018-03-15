const mongoose = require('mongoose');
const User = require('../models/user');



module.exports.doSignup = (req, res, next) => {
  // res.status(200).json({Message:"Tdo OK por el servidor"});
  let username = req.body.username;
  let password = req.body.password;
  let name = req.body.name;
  let secret = req.body.secret;
  console.log("BODY:");

  console.log(req.body);

  if (!username || !password || !name || !secret) {
    res.status(400).json({
      message: "Provide all the fields to sign up"
    });
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({
        message: "The username already exists"
      });
      return;
    } else {
      let newUser = new User(req.body);
      console.log(newUser);

      newUser.save((err) => {
        if (err) {
          res.status(400).json({
            message: "Something went wrong"
          });
        } else {
          req.login(newUser, (err) => {
            if (err) {
              return res.status(500).json({
                message: "Something went wrong"
              });
            }
            res.status(200).json(req.user);
          });
        }
      });
    }
  });
};