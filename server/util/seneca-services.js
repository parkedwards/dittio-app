// const seneca = require('seneca')();

module.exports = function (options) {
  const seneca = this;
  seneca.add({
    role: 'process',
    cmd: 'sum'
  }, (args, done) => {
    const numbers = args.numbers;
    const result = numbers.reduce((a, c) => a + c, 0);

    done(null, { result });
  });
};
