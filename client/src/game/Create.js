import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const PlayerList = connect( state => ({players: state.playersReducer.players})) (
  ({ players }) => {
  console.log("playerlist: ", players)
 return ( 
   <Card>
    <Card.Header>Lobby</Card.Header>
    <Card.Body>
      <Card.Title> The Players </Card.Title>
      <ListGroup>
        {players.map ( player => <ListGroup.Item key={player.name} disabled>{player}</ListGroup.Item>) }
      </ListGroup>
    </Card.Body>
  </Card>)
})



const Settings = props => (
  <Card>
    <Card.Header> Settings </Card.Header>
  </Card>
)


export default () => (
  <Container>
    <Row>
      <Col>
        <Settings />
      </Col>
      <Col>
        <PlayerList />
      </Col>
    </Row>
  </Container>

)


