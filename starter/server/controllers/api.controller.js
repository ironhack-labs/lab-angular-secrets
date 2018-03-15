const mongoose = require('mongoose');
const User = require('../models/user');
const passport =require('../config/passport.config');


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


module.exports.doLogin = (req, res, next)=> {
  return res.status(200).json({
        message: "LOGIN"
      });
  

  passport.authenticate("local", (err, user, info) => {
    //   if (err) {
  //     return res.status(401).json(err);
  //   }
  //   if (!user) {
  //     return res.status(401).json(info);
  //   }

  //   req.login(user, (err) => {
  //     if (err) {
  //       return res.status(500).json({
  //         message: "Something went wrong"
  //       });
  //     }
  //     return res.status(200).json(req.user);
  //   });
  // })(req, res, next);
})
};