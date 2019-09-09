const initialState = {
  status: "IN_LOBBY",
  inviteURL: "localhost:3000/lobby/32kg42j3"
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "GAME.START": return startGame(state, action.payload)
    default:
      return state
  }
}

function startGame(state, payload) {
  return {
    ...state,
    status: "RUNNING"
  }

}
