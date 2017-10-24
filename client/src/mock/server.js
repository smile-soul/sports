const jsonServer = require('json-server')
const server = jsonServer.create()
const dbFile = require('./db.js');
const router = jsonServer.router(dbFile)
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
  '/api/': '/',
  '/auth/login': '/login'
}))


server.use(jsonServer.bodyParser)
server.post('/login', function (req, res, next) {
  const username = req.body.username
  if (username === 'admin') {
    res.jsonp({ username, token: 'test_token' })
  } else {
    res.sendStatus(401)
  }
})


server.use(router)
server.listen(3001, function () {
  console.log('JSON Server is running')
})
