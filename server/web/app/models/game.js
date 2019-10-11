const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    state: { type: String, required: true, default: "init"},
    players: [ { name: String} ],
    type: { type: String, required: true}
})

module.exports = mongoose.model('Game', gameSchema);
