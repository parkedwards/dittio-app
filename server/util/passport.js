const LocalStrategy = require('passport-local').Strategy;
const db = require('../database/database');
const { encryptPassword, decryptPassword } = require('./encrypt');

module.exports = (passport) => {
  // ======================================================
  // PASSPORT SESSION SETUP ===============================
  // ======================================================
  // required for persistent login sessions
  // passport needs to be able to serialize / unserialize users out of session

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    db.query('select email from users where _id=$1 limit 1', [id], (err, user) => {
      done(err, user);
    });
  });

  // ======================================================
  // LOCAL LOGIN ==========================================
  // ======================================================

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, (req, email, password, done) => {
    db.query('select * from users where email= $1 limit 1', [email], (err, user) => {
      if (err) {
        return done(err);
      } // errors retrieving

      if (!user.rows[0]) {
        return done(null, false);
      } // if user doesn't exist

      if (!decryptPassword(password, user.rows[0].password)) {
        return done(null, false);
      } // if password doesn't match what's stored

      return done(null, user.rows[0]);
      // all is well, return successful user
    });
  }));


  // ======================================================
  // LOCAL SIGNUP =========================================
  // ======================================================

};
