import { useEffect, useState } from 'react'
import WSLobby from '../websocket/lobby'

export default (lobbyId) => {
    console.warn("dummy output", lobbyId)
    if(!WSLobby.inLobby()) {
        throw "usePlayers expects lobbyId of connected lobby as first parameter"
    }

    const [players] = useState([])

    useEffect( lobbyId => {
        
    })


   return [
       { id:"1", name: "Peter"},
       { id:"2", name: "klaus"}
   ] 
}