const r = require('express')()
const mongoose = require('mongoose')
const Lobby = require('../models/lobby')

r.get("/", async (req, res) => {
    const id = req.query.id
    console.log("reveived GET: ", id, req.query.id)
    const result = await Lobby.findById(id).exec()
    res.json(result)
})

r.post("/", (req, res) => {
    let lobby = new Lobby({
        players: [
            { name: "Klaus" },
            { name: "Peter" }
        ]
    })
    lobby.save()
    res.json(lobby)
})


module.exports = r
