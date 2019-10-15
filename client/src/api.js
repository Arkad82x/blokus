import axios from 'axios'

export const game = {
  init: () => get('./api/game/init'),
  shareURL: (gameId) => get(`./api/game/${gameId}/shareURL`)
}

export const lobby = {
  create: ({ name, password }) => post('/api/lobby', {name, password}),
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
  console.log("POST: ", url, params)
  try {
    const result = await axios.post(url, params )
    return result.data
  }catch(error) {
    Promise.reject(error)
  }
}