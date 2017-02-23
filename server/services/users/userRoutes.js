const { Router } = require('express');
const userCtrl = require('./userCtrl');

const userRoute = new Router();

module.exports = (passport) => {
  userRoute.post('/login', passport.authenticate('local-login'), userCtrl.loginUser);

  userRoute.post('/', (req, res) => {
    console.log('/signup route was hit!');
  });

  return userRoute;
};
