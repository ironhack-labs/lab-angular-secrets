const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const corsConfig = require('./config/cors.config');

require('./config/db-config');
require('./config/passport.config').setup(passport);

const MongoStore = require('connect-mongo')(session);

const api = require('./routes/api.routes');

const app = express();

app.use(cors(corsConfig))

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//initialize passport and session here
app.use(session({
  //Para saber que la cookie es nuestra y saber si ha sido modifica por un ajente externo
  secret: 'Super Secret',
  //Se guarda automaticamente
  resave: false,
  saveUninitialized: true,
  cookie: {
    //secure = true: la cookie se trasmite solo si esta bajo https
    secure: false,
    //httpOnly= true no se puede modificar la cookie en el chrome. Siempre a true
    httpOnly: true,
    //La duracion de la cookie
    maxAge: 60 * 60 * 24 * 1000
  },
  //Para que se guarde en moongo automaticamente
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  })
}));

//SIEMPRE DEBAJO DE LA DE SESSION y antes de las rutas
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.session = req.user || {};
  next();
});

//ROUTES
// app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next)  => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message || '' });
});

module.exports = app;