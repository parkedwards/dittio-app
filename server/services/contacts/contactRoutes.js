const express = require('express');
const contactCtrl = require('./contactCtrl');

const contactRoute = module.exports = express.Router();

contactRoute.post('/', contactCtrl.submitForm, contactCtrl.saveContact);
