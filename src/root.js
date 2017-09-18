var dio = require('dio.js')

var App = require('./app')

dio.hydrate(App)

if (module.hot)
  module.hot.accept('./app', function () {
    var newApp = require('./app')
    dio.render(newApp)
  })
