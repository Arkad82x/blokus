import uuid from 'uuid'

class WSLobby {
    constructor() {
        this.currentLobbyId = null
        this.listeners = []
    }

    inLobby() {
        return this.currentLobbyId !== null
    }

    join(id) {
        console.log("join")
        this.currentLobbyId = id
        this.socket.emit('join', { id })
    }

    leave() {
        if(this.currentLobbyId !== null){
            this.socket.emit('leave', { id: this.currentLobbyId })
        }else{
            throw new Error("calling leave while not connected is forbidden")
        }
    }

    addListener(listener) {
        const id = uuid()
        this.listeners.push({id, listener})
        return id
    }

    removeListener(id) {
        this.listeners = this.listeners.filter(l => l.id !== id)
    }
}

/*socket.emit('room', {room: 'test-room'});
socket.on('hi', payload => {
   console.log("Websocket receive: ", payload)
})*/


const singleton = new WSLobby()
export default singleton
