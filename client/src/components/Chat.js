import React, { useState } from 'react'
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import TextInput from './TextInput'
import Time from './Time'

import useChat from '../hooks/useChat'

const Footer = styled(Card.Footer)`
    padding: 4px 0px 0px 0px;
`

const ChatContainer = ({ channel="12abc35"}) => {
    const { messages, send, connecting, error } = useChat({ channel })

    return (
        <Chat
            messages={messages}
            connecting={connecting}
            error={error}
            send={send}
        > </Chat>
    )
}

const Chat = ({ messages=[], send, validate=(text) => text.length > 0, error}) => {
    const [message, setMessage] = useState("")

    function handleSend() {
        if(validate(message)) {
            console.log("sending: ", message)
            send({ text: message, user: "Peter"})
            setMessage("")
        }else {

        }
    }

    return (
        <Card variant="light" style={{display:"flex", flexDirection: "column", height:"100%", flex:"1"}}>
            <Card.Header> Chatroom </Card.Header>
            <Card.Body style={{flex: "1"}}>
                { messages.map( ({ user, text, sentAt }, idx) => 
                    <Message key={idx}>
                        <Message.User> { user }</Message.User>
                        <Message.Text> { text }</Message.Text>
                        <Time date={sentAt} />
                    </Message>
                )}
            </Card.Body>
            <Footer>
                <InputGroup>
                    <TextInput
                        type="text"
                        placeholder="Type your message here"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        onReturnPress={handleSend}
                    />
                    <Button onClick={handleSend}> Send </Button>
                </InputGroup>
            </Footer>
        </Card>
    )
}

const Message = styled.div`
    display: flex;
    margin: 2px 0px;
    align-items: center;

`

Message.User = styled.div`
    padding:4px 8px;
    font-weight: bold;
    margin-right:16px;

    ::after {
        content: ":"
    }
`

Message.Text = styled.span`
    flex: 1;
`

export default ChatContainer
