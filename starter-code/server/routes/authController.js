const express        = require("express");
const authController = express.Router();
const passport       = require("passport");

const User           = require("../models/user");

const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;

authController.post("/signup", (req, res, next) => {
  console.log("hi");
  let username = req.body.username;
  let password = req.body.password;
  let name     = req.body.name;
  let secret   = req.body.secret;
  console.log("hi1");
  if (!username || !password || !name || !secret) {
    console.log("hi2");
    res.status(400).json({ message: "Provide all the fields to sign up" });
  }
  console.log("hi3");
  User.findOne({ username }, "username", (err, user) => {
    console.log("hi4");
    if (user !== null) {
      console.log("hi5");
      res.status(400).json({ message: "The username already exists" });
      return;
    }
    console.log("hi6");
    console.log("password",password);
    let salt     = bcrypt.genSaltSync(bcryptSalt);
    console.log("hi6.5",salt);
    let hashPass = bcrypt.hashSync(password, salt);
    console.log("hi7");
    let newUser  = User({
      username,
      password: hashPass,
      name,
      secret
    });

    console.log(newUser);

    newUser.save((err) => {
      if (err) { res.status(400).json({ message: "Something went wrong" }); }
      else {
        req.login(newUser, (err) => {
          if (err) { return res.status(500).json({ message: "Something went wrong" }); }
          res.status(200).json(req.user);
        });
      }
    });
  });
});

authController.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("hiLogin");
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }
    console.log("hiLogin2");
    req.login(user, (err) => {
      console.log("hiLogin3");
      if (err) { return res.status(500).json({ message: "Something went wrong" }); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
});

authController.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
});

authController.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) { return res.status(200).json(req.user); }
  return res.status(403).json({ message: "Unauthorized" });
});

authController.get("/private", (req, res) => {
  if (req.isAuthenticated()) { return res.json({ message: req.user.secret }); }
  return res.status(403).json({ message: "Unauthorized" });
});


module.exports = authController;
