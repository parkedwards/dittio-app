const pg = require('pg');

// maybe destructure
const pool = new pg.Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  max: process.env.PG_MAX,
  idleTimeoutMillis: process.env.PG_IDLE,
});

pool.connect((err) => {
  if (err) console.error(err);
  
  else console.log('Successfully connected to dittiodb!');
});
