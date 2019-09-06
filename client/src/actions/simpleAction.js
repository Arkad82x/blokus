export const simpleAction = () => dispatch => {
  console.log("simpleAction")
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}
