const tests = require('./tests');

(async () => {
  await tests.cadastro();
  await tests.login();
})();