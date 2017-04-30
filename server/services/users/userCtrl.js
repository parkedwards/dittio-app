const firebase = require('firebase');
const request = require('request');

const userCtrl = {

  // Authenticates user with Firebase
  loginUser: (req, res, next) => {
    const { email, password } = req.body;
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(() => next())
    //   .catch(() => res.status(401).json({ error: 'Incorrect Username or Password ' }));

    request({
      url: 'https://dittio-auth-service-puenhbmmst.now.sh',
      method: 'post',
      body: { email, password },
      json: true
    }, (err, response, body) => {
      const { statusCode } = response;
      if (statusCode >= 400) {
        return res.status(statusCode).send(body);
      }
      next();
    });
  },

  // Proceeds user session to dashboard route after successful login
  // moveToSecret: (req, res) => res.status(202).json({ redirect: '/main' }),
  moveToSecret: (req, res) => res.redirect('/main'),

  // Checks existing user session for /login + /main routes
  // Allows for logged-in users to access dashboard directly
  // Otherwise prompts users to log in
  authenticateSession: (req, res, next) => {
    // const { path } = req;

    // request({
    //   url: 'http://localhost:3001',
    //   method: 'post',
    //   body: { path },
    //   json: true
    // }, (err, response, body) => {
    //   console.log(response.statusCode);
    //   console.log(body);
    // });
    if (req.path === '/main') {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          next();
        } else {
          res.redirect('/login');
        }
      });
    }

    if (req.path === '/login') {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          next();
        } else {
          res.redirect('/main');
        }
      });
    }
  },

  // Logs user out of session; redirects to login route
  logoutUser: (req, res) => {
    // firebase.auth().signOut()
    //   .then(() => res.status(202).json());
  },
};

module.exports = userCtrl;
