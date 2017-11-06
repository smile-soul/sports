'use strict';

const SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const app = require('express')();
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "sport_pysis"
});

global.pool = pool;
module.exports = app; // for testing
app.use('/static', express.static('public'));
app.use('/api', express.static('api/swagger/'));
const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
