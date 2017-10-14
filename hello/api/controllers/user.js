'use strict';

const util = require('util');

module.exports = {
  userinfo: userinfo,
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function userinfo(req, res) {
  const bodyname = req.swagger.params.body.value;
  console.log(bodyname);
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query(`select * from username where username=${getjson(bodyname["username"])} and password=${getjson(bodyname["password"])}`, function (error, results, fields) {
      if(results.length > 0) {
        res.json(JSON.stringify({
          type: results[0].type,
          auth: true
        }));
      } else {
        res.json(JSON.stringify({
          auth: false,
          type: null
        }));
      }
      connection.release();
      if (error) throw error;
    });
  });
}

function getjson(strings) {
  return JSON.stringify(strings);
}
