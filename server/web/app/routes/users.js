const r = require('express')()

r.get("/", (req, res) => {
    res.json({mirror: "GET users"})
})

module.exports = r