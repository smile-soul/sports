var async = require('async');
module.exports = function(app) {
  app.dataSources.mysqld.automigrate('sporttotal', function(err) {
    if (err) throw err;
    app.models.sporttotal.create({
    }, function(err, names) {
      if (err) throw err;
    });
  });
  app.dataSources.mysqld.automigrate('sources', function(err) {
    if (err) throw err;
    app.models.sources.create({
    }, function(err, names) {
      if (err) throw err;
    });
  });
};
