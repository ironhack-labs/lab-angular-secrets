const express        = require("express");
const router         = express.Router();
const sessionController = require('../controllers/session.controller');
const passport =require('../config/passport.config');


router.post('/login', sessionController.doLogin);

// router.get('/logout', passportController.logout);

// router.get('/private-page',passport.isAuthenticated, passportController.ensureLoggedIn);
// router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("passport/private", { session: req.session });
// });


module.exports = router;