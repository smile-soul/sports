'use strict';

const util = require('util');

module.exports = {
  sportBaseget: sportBaseget,
  sportBaseput: sportBaseput,
  sportRoad: sportRoad
};

function sportBaseget(req, res) {
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('select * from bend', function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function sportBaseput(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function(err, connection) {
    connection.query(`update sportInfo set
    sportname=${getjson(bodyname["sportname"])},
    sportBeginTime=${getjson(bodyname["sportBeginTime"])},
    sportEndTime=${getjson(bodyname["sportEndTime"])},
    sportday=${getjson(bodyname["sportday"])},
    straroad=${getjson(bodyname["straroad"])},
    benroad=${getjson(bodyname["benroad"])},
    methodroad=${getjson(bodyname["methodroad"])},
    comgroup=${getjson(bodyname["comgroup"])}
    where id=1`, function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function sportRoad(req, res) {
  pool.getConnection(function(err, connection) {
    connection.query(`select * from sportroad`, function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function getjson(strings) {
  return JSON.stringify(strings);
}
