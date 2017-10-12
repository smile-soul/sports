'use strict';

const util = require('util');

module.exports = {
  sportBaseget: sportBaseget,
  sportBaseput: sportBaseput,
  sportRoad: sportRoad
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function sportBaseget(req, res) {
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('select * from sportInfo', function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function sportBaseput(req, res) {
  const bodyname = Object.values(req.swagger.params.body.value);
  pool.getConnection(function(err, connection) {
    connection.query(`update sportInfo set
    sportname=${getjson(bodyname[0])},
    sportBeginTime=${getjson(bodyname[1])},
    sportEndTime=${getjson(bodyname[2])},
    sportday=${getjson(bodyname[3])}
    where id=1`, function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function sportRoad(req, res) {
  pool.getConnection(function(err, connection) {
    connection.query(`select * from sportRoad`, function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function getjson(strings) {
  return JSON.stringify(strings);
}
