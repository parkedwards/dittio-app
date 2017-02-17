const { Router } = require('express');
const userCtrl = require('./userCtrl');

const userRoute = module.exports = new Router();

userRoute.post('/login', (req, res, next) => {
  console.log('/login route was hit!');
  next();
}, userCtrl.authenticateUser);

userRoute.post('/signup', (req, res) => {
  console.log('/signup route was hit!');
});
