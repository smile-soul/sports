var async = require('async');
module.exports = function(app) {
  app.dataSources.mysqld.automigrate('names', function(err) {
    if (err) throw err;

    app.models.names.create([{
      name: 'Bel Cafe',
      city: 'Vancouver'
    }, {
      name: 'Three Bees Coffee House',
      city: 'San Mateo'
    }, {
      name: 'Caffe Artigiano',
      city: 'Vancouver'
    }, ], function(err, names) {
      if (err) throw err;

      console.log('Models created: \n', names);
    });
  });
};
