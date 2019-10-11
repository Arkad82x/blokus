const r = require('express')()
const routes = require('./routes')

Object.keys(routes).forEach(path => {
    r.use(`/${path}`, routes[path])
})

module.exports = r




