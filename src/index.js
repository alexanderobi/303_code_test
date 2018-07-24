const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const initData = require('./data/database');

initData().then(({ models: { test } }) => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', routes({ router: express.Router(), model: test }));
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
});
