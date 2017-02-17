const db = require('./userModel');


const userCtrl = {
  authenticateUser: (req, res) => {
    console.log('inside authenticateUser method!');
    return res.redirect('/main');
  },

};

module.exports = userCtrl;
