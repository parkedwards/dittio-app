const db = require('./orgModel');

const orgCtrl = {
  validateIntake: (req, res, next) => {
    if (!Object.keys(req.query).length) {
      return res.status(400).send('Invalid Query');
    }

    const orgName = req.query.org;

    db.query('select name from orgs where name= $1', [orgName], (err, user) => {
      if (err) {
        return res.status(401).json(err);
      }

      if (!user.rows[0]) {
        return res.status(402).send('Invalid Query');
      }

      next();
    });
  },


  addOrg: (req, res) => {
    if (!Object.keys(req.query).length) {
      return res.status(400).send('Invalid Query');
    }

    const orgName = req.query.org;

    db.query('insert into orgs (name) values ($1)', [orgName], (err) => {
      if (err) {
        return res.status(401).json(err);
      }

      return res.status(200).send(`Successful Insert of ${orgName}`);
    });
  },
};

module.exports = orgCtrl;
