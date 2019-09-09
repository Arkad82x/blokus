import { game } from '../api'

export function start () {
  return (dispatch, getState) => {
    game.init().then( res => {
      console.log("Game init success?: ", res)
      return dispatch({
        type: "GAME.START"
      })
    })
  }
}
