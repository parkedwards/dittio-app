const path = require('path');
const { Router } = require('express');

const { authenticateSession } = require('../users/userCtrl');

const indexRoutes = module.exports = new Router();

indexRoutes.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../dist/index.html'));
  res.render(path.join(__dirname, '../../../dist/index'));
});

indexRoutes.get('/login', authenticateSession, (req, res) => {
  res.render(path.join(__dirname, '../../../dist/login'));
});

indexRoutes.get('/main', authenticateSession, (req, res) => {
  res.render(path.join(__dirname, '../../../dist/dashboard'));
});

indexRoutes.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../dist/bundle.js'));
});
