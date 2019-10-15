import React, { useState } from 'react'
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { lobby } from '../api'

const SetupCard = styled(Card)`
    max-width: 100%;
    width: 500px;
    margin: 20px auto;
` 

//TODO additional validation e.g. name already taken
const LobbySetup = ({ history}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()

        setLoading(true)
        setError(false)

        lobby.create({
            name: event.target.gameName.value,
            password: event.target.password.value
        }).then(({ id }) => {
            history.push(`/lobby/${id}`)
        }).catch(() => {
            //TODO now being used yet
            setError(true)
        }).finally(() => {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }) 
    }

    return (
        <SetupCard onSubmit={event => handleSubmit(event, history)}>
            <Card.Header> Open lobby </Card.Header>
            { !loading && error && <Alert dismissible onClose={() => setError(false)} variant={"danger"}> Whoops, that didn't go as planned ... </Alert>}
            <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Group className="stretch">
                            <Form.Label> Name of the game </Form.Label>
                            <Form.Control
                                type="text" 
                                placeholder="Enter the Name here"
                                name="gameName"
                                required
                                disabled={loading}
                            />
                            <Form.Text className="text-muted"> Find this name in the Gamebrowser</Form.Text>
                        </Form.Group>
                    </Form.Row>

                     <Form.Row>
                        <Form.Group className="stretch">
                            <Form.Label> Password </Form.Label>
                            <Form.Control
                                type="text" 
                                name="password"
                                placeholder="Set a password (optional)"
                                disabled={loading}
                            />
                            <Form.Text className="text-muted"> </Form.Text>
                        </Form.Group>
                    </Form.Row>

                    <Button type="submit" disabled={loading}> 
                        { loading ? 
                            <>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                            </>
                        : <span> 
                            { error && "Lets try again!" }
                            { !error && "Lets Go!" }
                           </span>
                        }
                    </Button>
                </Form>
            </Card.Body>
        </SetupCard>
    )
}

export default LobbySetup 
