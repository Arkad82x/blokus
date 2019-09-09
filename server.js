const express = require('express');
const WebSocket = require('ws')
const http = require('http')

const app = express();
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/game/init', (req, res) => {
  console.log("/game/init", req.hostname)
  const game = handleInit()
  res.send({ game });
});

app.get('api/game/:id/shareURL', (req, res) => {
  console.log("request: ", req.hostname , ":", req.port, req.url)
  res.send("foobaR")
})



const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

const games = []

wss.on('connection', ws => {
  ws.on('message', message => {

    const { action, payload } = JSON.parse(message)
    switch(action.type) {
      default: 
        console.error("unknwon action: ", action, payload)
    }


  })
  ws.send('Hi there, I am a Websocket server')
})
  /*
server.listen(port, () => {
  console.log(`Server startet on port ${server.address().port} :)`)
})
*/


function handleInit(payload, ws) {
  const player = new Player(true, ws)
  const board = new Board()
  const game = new Game ([player], board)
  games.push(game)
  return game
}


class Game {
  constructor(players, board) {
    this.players = players
    this.id = genId (20)
    this.status = "pending"
    this.board = board
  }

  registerPlayer(player) {
    this.players.push(player) 
  }
}

class Player {
  constructor(host, ws) {
    this.host = host
    this.ws = ws
    this.id = genId(10)
  }
}

class Board {
  constructor(dim=20){
   this.dim = dim 
   this.model = []
  }
}
function genId (length) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  return [...new Array(length)].map(u => chars[Math.floor(Math.random()*chars.length)]).join("")
}
