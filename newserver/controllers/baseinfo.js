'use strict';

const util = require('util');

module.exports = {
  sportsAllMethod: sportsAllMethod,
  sportsAllStraight: sportsAllStraight,
  sportsAllBend: sportsAllBend,
  sportInfo: sportInfo,
};

//获取所有基本信息
function sportInfo(req, res) {
  pool.getConnection(function (err, connection) {
    let baseinfo;
    let baseinfogroup;
    connection.query("select baseinfo.id, name, begintime,endtime,\
    bend.road as bendroad, straight.road as straightroad, method.method as method from baseinfo, bend, straight, method \
    where baseinfo.bendroad = bend.id and baseinfo.straightroad = straight.id \
    and baseinfo.method = method.id ", function (error, results, fields) {
        // const arrayMethod = getArray(results, 'method');
        baseinfo = results;
        console.log(baseinfo);
        if (error) throw error;
      });
    connection.query("select * from sportgroup,baseinfo where sportgroup.id = baseinfo.group", function (error, results, fields) {
      // const arrayMethod = getArray(results, 'method');
      baseinfogroup = results;
      console.log(baseinfogroup);
      res.json(baseinfo);
      connection.release();
      if (error) throw error;
    });
  });
}

//获取所有计时方法
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

//获取所有直道
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

//获取所有弯道
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
  arrayData.map(value => {
    newArray.push(value[type]);
  })
  return newArray;
}
