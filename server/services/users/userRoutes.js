const { Router } = require('express');
const userCtrl = require('./userCtrl');

const userRoute = module.exports = new Router();

userRoute.post('/login', (req, res) => {
  console.log('/login route was hit!');
});

userRoute.post('/signup', (req, res) => {
  console.log('/signup route was hit!');
});
