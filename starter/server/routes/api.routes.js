const express        = require("express");
const router         = express.Router();
const apiController = require('../controllers/api.controller');
const passport =require('../config/passport.config');

// router.get('/signup', passportController.signup);
router.post('/signup', apiController.doSignup);

// router.get('/login', passportController.login);
router.post('/login', apiController.doLogin);

// router.get('/logout', passportController.logout);

// router.get('/private-page',passport.isAuthenticated, passportController.ensureLoggedIn);
// router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("passport/private", { user: req.user });
// });


module.exports = router;