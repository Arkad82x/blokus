const r = require('express')()
const mongoose = require('mongoose')
const Game = require('../models/game')

r.get("/", async (req, res) => {
    const result = await Game.find({type:"blokus"})
    res.send(result)
})

r.get("/create", (req, res) => {
    let game = new Game({
        type: "blokus",
        players: [
            { name: "Klaus" },
            { name: "Peter" }
        ]
    })
    game.save()
    res.json({success: true})
})


module.exports = r
