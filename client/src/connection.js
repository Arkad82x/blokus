export const websocket = new WebSocket('ws://localhost:5000')

export const connection = {
  game: {
    start: () => send({ action: {type: 'start_game'}}),
    get_invite_url: () => send({ action: {type: 'get_invite_url'} }),
    init: () => send({ action: {type: 'init_game'} })
  }
}

function send(data) {
  websocket.send(JSON.stringify(data))
}
