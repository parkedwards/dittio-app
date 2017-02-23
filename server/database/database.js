const pg = require('pg');
const { PG_CONFIG } = require('../config');

const pool = new pg.Pool(PG_CONFIG);

pool.connect((err) => {
  if (err) console.error(err);
  
  else console.log('Successfully connected to dittiodb!');
});

module.exports = pool;
