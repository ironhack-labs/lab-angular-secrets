const express        = require("express");
const router         = express.Router();
const userController = require('../controllers/user.controller');
const passport =require('../config/passport.config');

// router.get('/signup', passportController.signup);
router.post('/signup', userController.doSignup);

// router.get('/login', passportController.login);
// router.post('/login', userController.doLogin);

// router.get('/logout', passportController.logout);

// router.get('/private-page',passport.isAuthenticated, passportController.ensureLoggedIn);
// router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("passport/private", { user: req.user });
// });


module.exports = router;