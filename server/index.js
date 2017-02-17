const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv').config();

const { PORT } = require('./config');

const app = express();

// Listener for Kue processing - likely going to remove
// maybe put this into an app.use()?
const { contactJobs } = require('./services/jobConsumer/consumer');

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));

// Service-based routing import
const contactRoutes = require('./services/contacts/contactRoutes');
const userRoutes = require('./services/users/userRoutes');

// REST Gateways
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.use('/contact', contactRoutes);
app.use('/user', userRoutes);
app.get('/main', (req, res) => {
  console.log('inside main!');
  return res.sendFile(path.join(__dirname, '../src/dashboard/index.html'));
});

// Error catch-all
app.all('*', (req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`ditt.io up and running on port ${PORT}!`);
});
