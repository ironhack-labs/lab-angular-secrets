const express        = require("express");
const authController = express.Router();
const passport       = require("passport");
const User           = require("../models/User");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 9;

authController.post("/signup", (req, res, next) => {
 
  if (!req.body.username || !req.body.password || !req.body.name || !req.body.secret) {
    return res.status(400).json({ message: "Provide all the fields to sign up" });
  
  }

  User.findOne({ username: req.body.username }, "username", (err, user) => {
    if (user !== null) {
      return res.status(400).json({ message: "The username already exists" });
    }
    let password = req.body.password;
    let hashPass = bcrypt.hashSync(password , bcrypt.genSaltSync(bcryptSalt), null);

    let newUser  = new User({
      username: req.body.username,
      password: hashPass,
      name: req.body.name,
      secret: req.body.secret
    });

    console.log(newUser);

    // newUser.save((err) => {
    //   if (err) { res.status(400).json({ message: "Something went wrong" }); }
    //   else {
    //     req.login(newUser, (err) => {
    //       if (err) { return res.status(500).json({ message: "Something went wrong" }); }
    //       res.status(200).json(req.user);
    //     });
    //   }
    // });

    newUser.save()
    .then( user => {
      req.login(newUser, (err) => {
        if (err) { return res.status(5000).json({ message: "Something went wrong" }); }
        res.status(200).json(req.user);
      });
    })
    .catch(err => res.status(400).json({ message: "Something went wrong" }))
  });
});

authController.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
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
