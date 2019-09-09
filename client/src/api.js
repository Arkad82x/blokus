export const game = {
  init: () => get('./api/game/init'),
  shareURL: (gameId) => get(`./api/game/${gameId}/shareURL`)
}


async function get(url, params={}) {
  const response = await fetch(url)
  const body = await response.json()

  if(response.status !== 200) {
    throw Error(body.message)
  }
  return body
}


