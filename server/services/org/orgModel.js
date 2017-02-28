const db = require('../../database/database');

db.query(`create table if not exists "orgs" (
  _id serial primary key,
  name varchar(256) unique not null
)`, (err) => {
  if (err) {
    console.error(err);
  }
});

module.exports = db;