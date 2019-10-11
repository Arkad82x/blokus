import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { start as startGame } from '../actions/game'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import { copyToClipboard } from '../utils/clipboard.js'
import ShareText from '../components/ShareText'

const PlayerList = ({players}) => ( 
   <Card>
    <Card.Header>Lobby</Card.Header>
    <Card.Body>
      <Card.Title> Connected Players <span className="float-right"> {Object.keys(players).length} / 4 </span></Card.Title>
      <ListGroup>
        {Object.values(players).map ( player => <ListGroup.Item key={player.id} disabled>{player.name}</ListGroup.Item>) }
      </ListGroup>
    </Card.Body>
  </Card>
)


const Settings = props => (
  <Card>
    <Card.Header> Settings </Card.Header>
  </Card>
)

let Lobby = ({players, inviteURL, startGame}) => (
  <Container>
    <Row>
      <Col>
        <Settings />
      </Col>
      <Col>
        <PlayerList players={players}/>
      </Col>
    </Row>
    <Row>
      <ShareText inviteURL={inviteURL} copyToClipboard={copyToClipboard} />
      <Button onClick={startGame}> Start Game </Button>
    </Row>
  </Container>
)

const stateToProps = state => ({
    players: state.players,
    inviteURL: state.game.inviteURL
})

const dispatchToProps = dispatch => bindActionCreators({startGame}, dispatch)

export default connect(stateToProps, dispatchToProps)(Lobby)

