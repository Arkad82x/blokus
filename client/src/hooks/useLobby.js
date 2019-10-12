import { useState, useEffect } from 'react'
import WSLobby from '../websocket/lobby'


export default (initialLobby) => {
    const [lobby, setLobby] = useState(initialLobby)

    return [lobby, setLobby]
}