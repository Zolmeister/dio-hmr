var dio = require('dio.js')
var h = dio.h

require('./style.css')

module.exports = function () {
  return [
    h('head',
      h('title', 'dio'),
      h('script', {src: '/bundle.js'})
    ),
    h('body', h('div', {className: 'dio'}, 'dio!'))
  ]
}
