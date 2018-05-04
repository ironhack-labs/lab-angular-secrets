const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = passport => {
  passport.use(
    new LocalStrategy((username, password, next) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          next(null, false, { message: "Incorrect username" });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          next(null, false, { message: "Incorrect password" });
        }

        return next(null, user);
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });
};

// passport.use(new LocalStrategy((username, password, next) => {
//   User.findOne({ username }, (err, foundUser) => {
//     if (err) {
//       next(err);
//       return;
//     }

//     if (!foundUser) {
//       next(null, false, { message: 'Incorrect username' });
//       return;
//     }

//     if (!bcrypt.compareSync(password, foundUser.password)) {
//       next(null, false, { message: 'Incorrect password' });
//       return;
//     }

//     next(null, foundUser);
//   });
// }));

// passport.serializeUser((loggedInUser, cb) => {
//   cb(null, loggedInUser._id);
// });

// passport.deserializeUser((userIdFromSession, cb) => {
//   User.findById(userIdFromSession, (err, userDocument) => {
//     if (err) {
//       cb(err);
//       return;
//     }

//     cb(null, userDocument);
//   });
// });

// }
