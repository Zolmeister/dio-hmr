var dio = require('dio.js')

var App = require('./app')

var styles = document.head.querySelectorAll('style')
dio.hydrate(App)
for (var i = 0; i < styles.length; i++)
  document.head.appendChild(styles[i])

if (module.hot)
  module.hot.accept()
