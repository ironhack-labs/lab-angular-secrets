// const express        = require("express");
// const authController = express.Router();
// const passport       = require("passport");

// const User           = require("../models/user");

// const bcrypt         = require("bcrypt");
// const bcryptSalt     = 19;

// authController.post("/signup", (req, res, next) => {
//   let username = req.body.username;
//   let password = req.body.password;
//   let name     = req.body.name;
//   let secret   = req.body.secret;

//   if (!username || !password || !name || !secret) {
//     res.status(400).json({ message: "Provide all the fields to sign up" });
//   }

//   User.findOne({ username }, "username", (err, user) => {
//     if (user !== null) {
//       res.status(400).json({ message: "The username already exists" });
//       return;
//     }

//     let salt     = bcrypt.genSaltSync(bcryptSalt);
//     let hashPass = bcrypt.hashSync(password, salt);

//     let newUser  = User({
//       username,
//       password: hashPass,
//       name,
//       secret
//     });

//     console.log(newUser);

//     newUser.save((err) => {
//       if (err) { res.status(400).json({ message: "Something went wrong" }); }
//       else {
//         req.login(newUser, (err) => {
//           if (err) { return res.status(500).json({ message: "Something went wrong" }); }
//           res.status(200).json(req.user);
//         });
//       }
//     });
//   });
// });

// authController.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) { return res.status(401).json(err); }
//     if (!user) { return res.status(401).json(info); }

//     req.login(user, (err) => {
//       if (err) { return res.status(500).json({ message: "Something went wrong" }); }
//       return res.status(200).json(req.user);
//     });
//   })(req, res, next);
// });

// authController.post("/logout", (req, res) => {
//   req.logout();
//   res.status(200).json({ message: "Success" });
// });

// authController.get("/loggedin", (req, res) => {
//   if (req.isAuthenticated()) { return res.status(200).json(req.user); }
//   return res.status(403).json({ message: "Unauthorized" });
// });

// authController.get("/private", (req, res) => {
//   if (req.isAuthenticated()) { return res.json({ message: req.user.secret }); }
//   return res.status(403).json({ message: "Unauthorized" });
// });


// module.exports = authController;

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("server:auth");
const passport = require('passport')

let loginPromise = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

/* SIGNUP */
router.post('/signup', (req, res, next) => {
  const {username,password} = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Provide username and password' })
  User.findOne({ username }, '_id')
    .then(foundUser =>{
      if (foundUser) return res.status(400).json({ message: 'The username already exists' });
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const theUser = new User({
        username,
        password: hashPass
      });
      return theUser.save()
          .then(user => loginPromise(req,user))
          .then(user => {
            debug(`Registered user ${user._id}. Welcome ${user.username}`);
            res.status(200).json(req.user)
          }) 
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e)
    }) 
});


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req,theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: 'Something went wrong' }));
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;

