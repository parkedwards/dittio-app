const kue = require('kue');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

const queue = kue.createQueue();
const subject = 'Hello from Dittio!';

const contactJobs = queue.process('contact', (job, done) => {
  setTimeout(() => {
    const from_email = new helper.Email(job.data.from);
    const to_email = new helper.Email(job.data.email);
    const content = new helper.Content('text/plain', job.data.message);
    const mail = new helper.Mail(from_email, subject, to_email, content);

    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, (err, res) => {
      if (err) {
        console.error(err);
        done();
      } else {
        console.log('================================');
        console.log(res.statusCode);
        console.log(res.body);
        console.log(res.headers);
        console.log(`sent email to ${job.data.email}`);
        done();
      }
    });
  }, 2000);
});

module.exports = { contactJobs };
