const express        = require("express");
const passport       = require("passport");
const path = require ("path");
const User           = require("../models/User");

const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;
const authController = express.Router();

authController.post("/signup", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let name     = req.body.name;
  let secret   = req.body.secret;

  if (!username || !password || !name || !secret) {
    res.status(400).json({ message: "Provide all the fields to sign up" });
  }

  User.findOne({username}, "username")
    .then(user => {
      if (user !== null) {
        return res.status(400).json({ message: "The username already exists" });
      }
      let salt     = bcrypt.genSaltSync(bcryptSalt);
      let hashPass = bcrypt.hashSync(password, salt);

      let newUser  = User({
        username,
        password: hashPass,
        name,
        secret
      });

      newUser.save()
        .then(user => res.status(200).json(req.user))
        .catch(e => res.status(500).json({ message: "Something went wrong" }))
    }).catch(e => res.status(500).json({ message: e }))

  // User.findOne({ username }, "username", (err, user) => {
  //   if (user !== null) {
  //     res.status(400).json({ message: "The username already exists" });
  //     return;
  //   }
  //
  //   let salt     = bcrypt.genSaltSync(bcryptSalt);
  //   let hashPass = bcrypt.hashSync(password, salt);
  //
  //   let newUser  = User({
  //     username,
  //     password: hashPass,
  //     name,
  //     secret
  //   });
  //
  //   console.log(newUser);
  //
  //   newUser.save((err) => {
  //     if (err) { res.status(400).json({ message: "Something went wrong" }); }
  //     else {
  //       req.login(newUser, (err) => {
  //         if (err) { return res.status(500).json({ message: "Something went wrong" }); }
  //         res.status(200).json(req.user);
  //       });
  //     }
  //   });
});

authController.post("/login", (req, res, next) => {
  console.log("entrooo")
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
      console.log("llego a login")
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authController.get("/logout", (req, res) => {
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
