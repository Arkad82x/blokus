const initialState = {
  players: [],
  playersById: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    default:
      console.error("unsupported action: ", action)
      return state
  }
}
