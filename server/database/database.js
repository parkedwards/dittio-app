const pg = require('pg');

const { PG_USER, PG_PW, PG_DB, PG_HOST, PG_PORT, PG_MAX, PG_IDLE } = process.env;

// maybe destructure
const pool = new pg.Pool({
  user: PG_USER,
  password: PG_PW,
  database: PG_DB,
  host: PG_HOST,
  port: PG_PORT,
  max: PG_MAX,
  idleTimeoutMillis: PG_IDLE,
});

pool.connect((err) => {
  if (err) console.error(err);
  
  else console.log('Successfully connected to dittiodb!');
});

module.exports = pool;
