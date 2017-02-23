const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

module.exports = {
  decryptPassword: (textPW, hashPW) => bcrypt.compareSync(textPW, hashPW),

  encryptPassword: (password) => {
    const salt = bcrypt.genSaltSync(SALT_FACTOR);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  },
};
