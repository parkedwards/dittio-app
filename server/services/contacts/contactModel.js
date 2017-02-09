const db = require('../../database/database');

db.query(`create table if not exists "contacts" (
  _id serial primary key,
  name varchar(256) not null,
  email varchar(256) not null,
  phone varchar(256),
  message varchar(256)
)`, (err) => {
  if (err) {
    console.error(err);
  }
});

module.exports = db;
