const { Router } = require('express');
const contactCtrl = require('./contactCtrl');

const contactRoute = module.exports = new Router();

contactRoute.post('/', contactCtrl.submitForm, contactCtrl.saveContact);
