



module.exports.doSignup = (req, res, next) => {
  res.status(200).json({Message:"Tdo OK por el servidor"});
  // let username = req.body.username;
  // let password = req.body.password;
  // let name = req.body.name;
  // let secret = req.body.secret;

  // if (!username || !password || !name || !secret) {
  //   res.status(400).json({
  //     message: "Provide all the fields to sign up"
  //   });
  // }

  // User.findOne({
  //   username
  // }, "username", (err, user) => {
  //   if (user !== null) {
  //     res.status(400).json({
  //       message: "The username already exists"
  //     });
  //     return;
  //   }

  //   let salt = bcrypt.genSaltSync(bcryptSalt);
  //   let hashPass = bcrypt.hashSync(password, salt);

  //   let newUser = User({
  //     username,
  //     password: hashPass,
  //     name,
  //     secret
  //   });

  //   console.log(newUser);

  //   newUser.save((err) => {
  //     if (err) {
  //       res.status(400).json({
  //         message: "Something went wrong"
  //       });
  //     } else {
  //       req.login(newUser, (err) => {
  //         if (err) {
  //           return res.status(500).json({
  //             message: "Something went wrong"
  //           });
  //         }
  //         res.status(200).json(req.user);
  //       });
  //     }
  //   });
  // });
};