const express = require('express');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const db = require('./db');
const app = express();

passport.use(new Strategy(
  function(token, cb) {
    db.users.findByToken(token, function(err, user) {
      if (err) { return 'cb(err)'; }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
  }));


app.use(express.static(__dirname+ '/view'));
app.use(require('morgan')('combined'));

// curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:3000/
// curl -v http://127.0.0.1:3000/?access_token=123456789
app.get('/',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.redirect('http://localhost:8080/')
  });

app.listen(3000);
