const routes = require('next-routes');

module.exports = routes()
  .add('/', 'home')
  .add('/user', 'user')
  .add('/detail/:user', 'detail')
