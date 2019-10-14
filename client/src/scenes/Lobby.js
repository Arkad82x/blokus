import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'



import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import LinkButton from '../components/LinkButton'

import WSLobby from '../websocket/lobby'

import { APILobby } from '../api'

const Settings = props => (
  <Card>
    <Card.Header> Settings </Card.Header>
  </Card>
)

const LobbyContainer = () => {
  const { id } = useParams()
  //loading = existing lobby
  const [loading, setLoading] = useState(id !== undefined)
  //creating = new lobby
  const [creating, setCreating] = useState(id === undefined)
  //error just in case
  const [error, setError] = useState(false)

  useEffect(() => {
    if(creating) {
      APILobby.create().then(result => {
        setLoading(false)
        setCreating(false)
      }).catch( error => {
        console.error(error)
        setLoading(false)
        setCreating(false)
        setError(true)
      })
    }
  }, [])

  useEffect(() => {
    if(loading) {
      APILobby.get(id).then(result => {
        setLoading(false)
        setCreating(false)
        WSLobby.join(id)
      }).catch( error => {
        console.error(error)
        setLoading(false)
        setCreating(false)
        setError(true)
      })
    }
  }, [])

  if(!loading && !creating && !id) {
    console.log(loading, creating, id)
    return <Redirect to={`/lobby/${42}`} />
  }

  return (
    <Lobby loading={loading} creating={creating} error={error} lobby={"foobar"}/>
  )
}

const Lobby = ({ loading, creating, error, ...props}) => {
  console.log(useParams())

  if(loading) {
    return <h3> Connecting to Lobby ...</h3>
  }
  if(creating) {
    return <h3> Creating Lobby ...</h3>
  }

  return (
    <Container>
      <Row>
        <Col>
          <Settings />
        </Col>
        <Col>
          <Button onClick={() =>WSLobby.join(42)}>join</Button>
          <Button onClick={() =>WSLobby.leave()}>leave</Button>
          <p> Connected to lobby? {}</p>
        </Col>
      </Row>
      <Row>
        <LinkButton to="/home"> Close Lobby </LinkButton>
      </Row>
    </Container>
  )
}

const Temp = () => (
  <h3> Temp</h3>
)
export default Temp 

