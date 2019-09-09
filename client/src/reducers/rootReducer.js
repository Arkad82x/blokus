import { combineReducers } from 'redux'
import players from './players'
import lobby from './lobby'
import game from './game'

export default combineReducers({
 lobby,
 players,
 game
});
