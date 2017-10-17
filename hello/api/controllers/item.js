'use strict';

const util = require('util');

module.exports = {
  itemget: itemget,
  itempost: itempost,
  itemput: itemput
};

function itemget(req, res) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('select * from sportitem', function (error, results, fields) {
      res.json(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function itempost(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
    bodyname.map((value) => {
      connection.query(`insert into sportitem (item, limit) values(
      ${getjson(value["item"])},
      ${getjson(value["limit"])})`, function (error, results, fields) {
          res.send(results);
          connection.release();
          if (error) throw error;
        });
    })
  });
}

function itemput(req, res) {
  const bodyname = req.swagger.params.body.value;
  pool.getConnection(function (err, connection) {
    bodyname.map((value) => {
      console.log(value);
      connection.query(`update sportitem set
      item=${getjson(value["item"])},
      limit=${getjson(value["limit"])}
      where id=${getjson(value["id"])}`, function (error, results, fields) {
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
