'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');
const app = require('express')();
// var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
const mysql = require('mysql');
var serverPort = 8080;

const pool = mysql.createPool({
  connectionLimit: 20,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "sport_pysis"
});

global.pool = pool;
// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, 'api/swagger.yaml'),
  controllers: path.join(__dirname, 'controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'authorization');
  next();
});
// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});
