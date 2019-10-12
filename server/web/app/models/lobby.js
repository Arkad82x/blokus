const mongoose = require('mongoose')

const lobbySchema = new mongoose.Schema({
    players: [ { name: String} ]
})

module.exports = mongoose.model('Lobby', lobbySchema);
