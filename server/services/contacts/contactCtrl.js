const db = require('./contactModel');
const kue = require('kue');

const { REDIS_URL } = require('../../config');

const queue = kue.createQueue({
  redis: REDIS_URL,
});

const contactCtrl = {};

contactCtrl.submitForm = (req, res, next) => {
  const { name, email, phone, message } = req.body;

  const job = queue.create('contact', {
    title: 'Contact Form Submission',
    from: 'contact@ditt.io.',
    name,
    email,
    phone,
    message,
  })
    .removeOnComplete(true)
    .save((err) => {
      if (err) {
        console.error(err);
        return res.status(400).end();
      }

      job.on('complete', () => { console.log(`job for ${req.body.email} complete!`); });
      job.on('failed', () => { console.error(`job for ${req.body.email} failed!`); });

      // return res.status(201).end();
      next();
    });
};

contactCtrl.saveContact = (req, res) => {
  const { name, email, phone, message } = req.body;

  db.query('insert into contacts (name, email, phone, message) values ($1, $2, $3, $4)', [name, email, phone, message], (err) => {
    if (err) {
      console.error(err);
      return res.status(400).end();
    }

    return res.status(201).end();
  });
};

module.exports = contactCtrl;
