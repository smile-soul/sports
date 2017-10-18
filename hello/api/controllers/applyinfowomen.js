'use strict';

const util = require('util');

module.exports = {
  applyinfowomenget: applyinfowomenget,
  applyinfowomenpost: applyinfowomenpost,
  applyinfowomenput: applyinfowomenput,
  applyinfowomenallpost: applyinfowomenallpost,
};

function applyinfowomenget(req, res) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('select * from baomingwomen', function (error, results, fields) {
      res.json(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function applyinfowomenpost(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
      connection.query(`insert into baomingwomen (type,name, itemone ,itemtwo ,itemthree, itemfour, sex, dateday, resid, nubmerid) values(
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

function applyinfowomenallpost(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
    connection.query('TRUNCATE TABLE baomingwomen');
    bodyname.map((value) => {
      connection.query(`insert into baomingwomen (type,name, itemone ,itemtwo ,itemthree, itemfour, sex, dateday, resid, nubmerid) values(
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
function applyinfowomenput(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
    bodyname.map((value) => {
      console.log(value);
      connection.query(`update baomingwomen set
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
