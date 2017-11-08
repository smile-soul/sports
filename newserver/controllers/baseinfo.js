'use strict';

const util = require('util');

module.exports = {
  sportsAllMethod: sportsAllMethod,
  sportsAllStraight: sportsAllStraight,
  sportsAllBend: sportsAllBend,
};

function sportsAllMethod(req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('select method from method', function (error, results, fields) {
      const arrayMethod = getArray(results, 'method');
      res.json(arrayMethod);
      connection.release();
      if (error) throw error;
    });
  });
}

function sportsAllStraight(req, res) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('select road from straight', function (error, results, fields) {
      const arrayStraight = getArray(results, 'road');
      console.log(arrayStraight);
      if (error) throw error;
    });
  });
}
function sportsAllBend(req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('select road from bend', function (error, results, fields) {
      const arrayBend = getArray(results, 'road');
      res.json(arrayBend);
      connection.release();
      if (error) throw error;
    });
  });
}
//转换字符串
function getjson(strings) {
  return JSON.stringify(strings);
}
// 获取数据数组
function getArray(arrayData, type) {
  const newArray = [];
  arrayData.map( value => {
    newArray.push(value[type]);
  })
  return newArray;
}
