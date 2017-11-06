'use strict';

const util = require('util');

module.exports = {
  aaaa: aaaa,
  // sportsAllStraight: sportsAllStraight,
  // sportsAllBend: sportsAllBend,
};

function aaaa(req, res) {
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
//     connection.query('TRUNCATE TABLE baoming');
//     bodyname.map((value) => {
//       connection.query(`insert into baoming (type,name, itemone ,itemtwo ,itemthree, itemfour, sex, dateday, resid, nubmerid) values(
//       ${getjson(value["type"])},
//       ${getjson(value["name"])},
//       ${getjson(value["itemone"])},
//       ${getjson(value["itemtwo"])},
//       ${getjson(value["itemthree"])},
//       ${getjson(value["itemfour"])},
//       ${getjson(value["sex"])},
//       ${getjson(value["dateday"])},
//       ${getjson(value["resid"])},
//       ${getjson(value["nubmerid"])})`, function (error, results, fields) {
//           res.send(results);
//           connection.release();
//           if (error) throw error;
//         });
//     })
//   });
// }

function getjson(strings) {
  return JSON.stringify(strings);
}
