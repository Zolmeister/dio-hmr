var dio = require('dio.js')

var App = require('./app')

// FIXME
if (!window.hydrated) {
  window.hydrated = true
  dio.hydrate(App)
}

if (module.hot)
  module.hot.accept()
