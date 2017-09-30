const express        = require("express");
const passport       = require("passport");
const path = require ("path");
const User           = require("../models/User");

const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;
const authController = express.Router();

authController.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const name     = req.body.name;
  const secret   = req.body.secret;

  if (!username || !password || !name || !secret) {
    res.status(400).json({ message: "Provide all the fields to sign up" });
  }

  User.findOne({ username },'_id').exec().then(user =>{
     if(user)
       return res.status(400).json({ message: 'The username already exists' });

      const salt     = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const theUser = new User({
        username,
        password: hashPass,
        name,
        secret
      });
      return theUser.save()
        .then(user => res.status(200).json(req.user))
        .catch(e => res.status(500).json({ message: "Something went wrong" }))
    }).catch(e => res.status(500).json({ message: e }))
});

authController.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
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
  if (req.isAuthenticated())
   return res.status(200).json(req.user);
  res.status(403).json({ message: "Unauthorized" });
});

authController.get("/private", (req, res) => {
  if (req.isAuthenticated()) { return res.json({ message: req.user.secret }); }
  return res.status(403).json({ message: "Unauthorized" });
});


module.exports = authController;
