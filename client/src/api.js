import axios from 'axios'

export const APIgame = {
  init: () => get('./api/game/init'),
  shareURL: (gameId) => get(`./api/game/${gameId}/shareURL`)
}

export const APILobby = {
  create: () => post('/api/lobby'),
  get: (id) => get('/api/lobby', { id })
}


async function get(url, params={}) {
  console.log("GET: ", url, params)
  try {
    const result = await axios.get(url, { params } )
    return result.data
  }catch(error) {
    Promise.reject(error)
  }
}

async function post(url, params={}) {
  try {
    const result = await axios.post(url, params )
    return result.data
  }catch(error) {
    Promise.reject(error)
  }
}