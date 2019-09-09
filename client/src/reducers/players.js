const initialState = {
    0: {
      id: 0,
      name: "player 1"
    },
    1: {
      id: 1,
      name: "Kevin"
    }
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "ADD_PLAYER": return {...state, [action.payload.id]:action.payload}
    default:
      return state
  }
}
