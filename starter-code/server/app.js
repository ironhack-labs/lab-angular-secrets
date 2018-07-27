const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const authController = require("./routes/authController");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require('connect-mongo')(session)

const app = express();

// Passport configuration
require("./config/passport")(passport);

// Mongoose configuration
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/angular-authentication");

// Session
app.use(
  session({
    secret: "lab-angular-authentication",
    resave: true,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 2419200000 },
    store: new MongoStore({mongooseConnection: mongoose.connection})
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Middleware Setup
var whitelist = [
  'http://localhost:4200',
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));



app.use(express.static(path.join(__dirname, "public")));

// uncomment after placing your favicon in /public
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", authController);
app.all("/*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
