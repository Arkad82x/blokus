import { useState, useEffect } from 'react'

import io from 'socket.io-client'

const socket = io('http://localhost:5000/chat');

const useChat = ({ channel }) => {
    const [connected, setConnected] = useState(false)
    const [messages, setMessages] = useState([])

    const send = (({ user, text }) => {
        socket.emit('new message', {
            user,
            text,
            channel,
            sentAt: new Date()
        })
    })

    socket.on('confirm join', params => {
         setConnected(true)
    })

    socket.on('new message', (params) => {
        const { user, text, sentAt} = params
        setMessages([...messages, {user, text, sentAt: new Date(sentAt)}])
    })


    useEffect(() => {
        socket.emit('join', { channel })
    }, [channel])


    return { send, messages, connecting: !connected}
}

export default useChat