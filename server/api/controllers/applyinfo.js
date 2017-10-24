'use strict';

const util = require('util');

module.exports = {
  applyinfoget: applyinfoget,
  applyinfopost: applyinfopost,
  applyinfoput: applyinfoput,
  applyinfoAllpost: applyinfoAllpost
};

function applyinfoget(req, res) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('select * from baoming', function (error, results, fields) {
      res.json(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function applyinfopost(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
      connection.query(`insert into baoming (type,name, itemone ,itemtwo ,itemthree, itemfour, sex, dateday, resid, nubmerid) values(
      ${getjson(bodyname["type"])},
      ${getjson(bodyname["name"])},
      ${getjson(bodyname["itemone"])},
      ${getjson(bodyname["itemtwo"])},
      ${getjson(bodyname["itemthree"])},
      ${getjson(bodyname["itemfour"])},
      ${getjson(bodyname["sex"])},
      ${getjson(bodyname["dateday"])},
      ${getjson(bodyname["resid"])},
      ${getjson(bodyname["nubmerid"])})`, function (error, results, fields) {
          res.send(results);
          connection.release();
          if (error) throw error;
        });
  });
}
function applyinfoAllpost(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
    connection.query('TRUNCATE TABLE baoming');
    bodyname.map((value) => {
      connection.query(`insert into baoming (type,name, itemone ,itemtwo ,itemthree, itemfour, sex, dateday, resid, nubmerid) values(
      ${getjson(value["type"])},
      ${getjson(value["name"])},
      ${getjson(value["itemone"])},
      ${getjson(value["itemtwo"])},
      ${getjson(value["itemthree"])},
      ${getjson(value["itemfour"])},
      ${getjson(value["sex"])},
      ${getjson(value["dateday"])},
      ${getjson(value["resid"])},
      ${getjson(value["nubmerid"])})`, function (error, results, fields) {
          res.send(results);
          connection.release();
          if (error) throw error;
        });
    })
  });
}
function applyinfoput(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
    bodyname.map((value) => {
      console.log(value);
      connection.query(`update baoming set
      type=${getjson(value["type"])},
      name=${getjson(value["name"])},
      itemone=${getjson(value["itemone"])},
      itemtwo=${getjson(value["itemtwo"])},
      itemthree=${getjson(value["itemthree"])},
      itemfour=${getjson(value["itemfour"])},
      sex=${getjson(value["sex"])},
      dateday=${getjson(value["dateday"])},
      resid=${getjson(value["resid"])}
      where nubmerid=${getjson(value["nubmerid"])}`, function (error, results, fields) {
          res.send(results);
          connection.release();
          if (error) throw error;
        });
    })
  });
}

function getjson(strings) {
  return JSON.stringify(strings);
}
