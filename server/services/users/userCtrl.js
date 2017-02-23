const db = require('./userModel');
const passport = require('passport');

const userCtrl = {
  loginUser: (req, res) => res.status(202).json({ redirect: '/dashboard' }),
};

module.exports = userCtrl;
