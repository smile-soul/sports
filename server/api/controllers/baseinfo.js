'use strict';

const util = require('util');

module.exports = {
  sportsAllBends: sportsAllBends,
  // sportsAllStraight: sportsAllStraight,
  // sportsAllBend: sportsAllBend,
};

function sportsAllBends(req, res) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('select * from bend', function (error, results, fields) {
      console.log(results);
      res.json(results);
      connection.release();
      if (error) throw error;
    });
  });
}

// function sportsAllStraight(req, res) {
//   const bodyname = req.swagger.params.body.value;
//   pool.getConnection(function (err, connection) {
//     // Use the connection
//     connection.query('select * from bend', function (error, results, fields) {
//       console.log(results);
//       res.json(results);
//       connection.release();
//       if (error) throw error;
//     });
//   });
// }
// function sportsAllBend(req, res) {
//   const bodyname = req.swagger.params.body.value;
//   pool.getConnection(function (err, connection) {

//   });
// }

function getjson(strings) {
  return JSON.stringify(strings);
}
