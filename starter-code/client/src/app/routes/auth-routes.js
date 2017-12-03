const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');

// Our user model
const User       = require('../models/user-model');

const authRoutes = express.Router();
