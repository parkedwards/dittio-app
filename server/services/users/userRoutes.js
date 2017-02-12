const { Router } = require('express');
const userCtrl = require('./userCtrl');

const userRoute = module.exports = new Router();

userRoute.post('/login');
userRoute.post('/signup');
