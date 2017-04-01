const { Router } = require('express');
const userCtrl = require('./userCtrl');
const admin = require('firebase-admin');

const userRoute = new Router();

module.exports = (passport) => {
  // userRoute.post('/login', passport.authenticate('local-login'), userCtrl.loginUser);
  userRoute.post('/login', (req, res) => {

    console.log('login route was hit!');

    const { email, password } = req.body;

    admin.auth().getUserByEmail(email)
      .then((retrievedUser) => {
        console.log(retrievedUser.toJSON());
      });
  });

  userRoute.post('/', (req, res) => {
    console.log('/signup route was hit!');
  });

  return userRoute;
};
