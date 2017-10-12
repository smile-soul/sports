'use strict';

const util = require('util');

module.exports = {
  sportinfo: sportBase
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function sportBase(req, res) {
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('select * from sportInfo', function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}
