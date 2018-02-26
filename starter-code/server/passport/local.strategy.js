    const passport = require('passport');
    const localStrategy = require('passport-local').Strategy;
    const User = require('../models/User');
    const bcrypt = require('bcrypt');

    console.log("Configure local strategy");
    passport.use(new localStrategy((username, passport, next) => {
    console.log("received user password");
    User.findOne({ username },(err, foundUser) => {

        if (err) {
            next();
            return;
        }
        if (!foundUser){
            next(null, false, { message: "Incorrect usewrname"});
            return;

        if (! bcrypt.compareSync(password, foundUser, password)){
            next(null, false, {message: "Incorrect Password"});
            return;
        } 
        }
        next(null, foundUser);
    });
    }))
