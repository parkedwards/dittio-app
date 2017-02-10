const express = require('express');
const userCtrl = require('./userCtrl');

const userRoute = module.exports = express.Router();

userRoute.post('/login');
userRoute.post('/signup');
