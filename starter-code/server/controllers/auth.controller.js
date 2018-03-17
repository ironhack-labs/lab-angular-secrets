const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;
const passport       = require("passport");


module.exports.signup = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body);
  
    if (!username || !password) {
      res.status(400).json({ message: "Provide all the fields to sign up" });
    }
  
    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.status(400).json({ message: "The username already exists" });
        return;
      }

    
      let salt     = bcrypt.genSaltSync(bcryptSalt);
      let hashPass = bcrypt.hashSync(password, salt);
  
      let newUser  = User({
        username,
        password: hashPass
      });
  
     // console.log(newUser);
    newUser.save()
      .then(user => {
        console.log(user);
        res.status(200).json({message: "OK"});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" }); 
      });
    });
  };
  
module.exports.login =  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) { return res.status(401).json(err); }
      if (!user) { return res.status(401).json(info); }
  
      req.login(user, (err) => {
        if (err) { return res.status(500).json({ message: "Something went wrong" }); }
        return res.status(200).json(req.user);
      });
    })(req, res, next);
  };
  
module.exports.logout = (req, res) => {
    req.logout();
    res.status(200).json({ message: "Success" });
  };
  
module.exports.loggedin = (req, res) => {
    if (req.isAuthenticated()) { return res.status(200).json(req.user); }
    return res.status(403).json({ message: "Unauthorized" });
  };
  
module.exports.private = (req, res) => {
    if (req.isAuthenticated()) { return res.json({ message: req.user.secret }); }
    return res.status(403).json({ message: "Unauthorized" });
  };