import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'



import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { copyToClipboard } from '../utils/clipboard.js'
import ShareText from '../components/ShareText'

import LinkButton from '../components/LinkButton'
import PlayerList from '../components/PlayerList'

import useLobby from '../hooks/useLobby'

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

  const [lobby, setLobby] = useLobby(null)

  useEffect(() => {
    if(creating) {
      APILobby.create().then(result => {
        setLobby(result)
        setLoading(false)
        setCreating(false)
      }).catch( error => {
        console.error(error)
        setLobby(null)
        setLoading(false)
        setCreating(false)
        setError(true)
      })
    }
  }, [])

  useEffect(() => {
    if(loading) {
      APILobby.get(id).then(result => {
        setLobby(result)
        setLoading(false)
        setCreating(false)
        WSLobby.join(id)
      }).catch( error => {
        console.error(error)
        setLobby(null)
        setLoading(false)
        setCreating(false)
        setError(true)
      })
    }
  }, [])

  if(!loading && !creating && !id && lobby && lobby._id) {
    console.log(loading, creating, id, lobby)
    return <Redirect to={`/lobby/${lobby._id}`} />
  }

  return (
    <Lobby loading={loading} creating={creating} error={error} lobby={lobby}/>
  )
}

const Lobby = ({ loading, creating, error, ...props}) => {
  console.log(useParams())

  const lobby = useLobby(props.lobby)

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

export default LobbyContainer

