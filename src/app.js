var dio = require('dio.js')
var h = dio.h

require('./style.css')

module.exports = function () {
  return [
    h('head',
      h('title', 'dio'),
      typeof window === 'undefined' ? h('script', {src: '/bundle.js'}) : null
    ),
    h('body', h('div', {className: 'dio'}, 'dio!'))
  ]
}
