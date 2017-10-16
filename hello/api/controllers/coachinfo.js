'use strict';

const util = require('util');

module.exports = {
  coachinfoget: coachinfoget,
  coachinfoput: coachinfoput,
};


function coachinfoget(req, res) {
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('select * from cochainfo where id=1', function (error, results, fields) {
      res.json(results);
      connection.release();
      if (error) throw error;
    });
  });
}
function coachinfoput(req, res) {
  const bodyname = req.swagger.params.body.value;
  console.log(bodyname);
  pool.getConnection(function(err, connection) {
    connection.query(`update cochainfo set
    unitname=${getjson(bodyname["unitname"])},
    groupname=${getjson(bodyname["groupname"])},
    groupleader=${getjson(bodyname["groupleader"])},
    coach=${getjson(bodyname["coach"])},
    doctor=${getjson(bodyname["doctor"])},
    worker=${getjson(bodyname["worker"])},
    tel=${getjson(bodyname["tel"])}
    where id=1`, function (error, results, fields) {
      res.send(results);
      connection.release();
      if (error) throw error;
    });
  });
}

function getjson(strings) {
  return JSON.stringify(strings);
}
