const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const request = require('request');

const dotenv = require('dotenv').config();
const {
  PORT,
  SESSION_SECRET,
} = require('./config');


// ==========================================================
// Utility Inits ============================================
// ==========================================================

require('./util/fb-auth-init')();
require('./util/consumer')();
require('./util/passport')(passport);


// ==========================================================
// Session Handling + Middleware ============================
// ==========================================================

app.use(session({ secret: SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));

app.set('view engine', 'ejs');


// ==========================================================
// Importing Service Routes =================================
// ==========================================================

const indexRoutes = require('./services/index/indexRoutes');
const contactRoutes = require('./services/contacts/contactRoutes');
const userRoutes = require('./services/users/userRoutes');
const orgRoutes = require('./services/org/orgRoutes');


// ==========================================================
// API Gateway ==============================================
// ==========================================================

app.post('/nba', (req, res) => {

  request({
    method: 'post',
    url: 'http://localhost:3001',
    body: req.body,
    json: true,
  }, (err, response, body) => {
    return res.status(200).json(response);
  });
});

app.use('/', indexRoutes);
app.use('/intake', orgRoutes);
app.use('/contact', contactRoutes);
app.use('/user', userRoutes);


// ==========================================================
// Error catch-all + Server spinup ==========================
// ==========================================================

app.all('*', (req, res) => res.status(404).end('Page Not Found!'));

app.listen(PORT, () => {
  console.log(`ditt.io up and running on port ${PORT}!`);
});
