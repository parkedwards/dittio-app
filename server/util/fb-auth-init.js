// Initializes a connection to the Firebase DB

const admin = require('firebase-admin');
const { SERVICE_ACCOUNT_KEY } = require('../config');

module.exports = () => {
  admin.initializeApp({
    credential: admin.credential.cert(SERVICE_ACCOUNT_KEY),
    databaseURL: 'https://dittio-users.firebaseio.com',
  });
};

