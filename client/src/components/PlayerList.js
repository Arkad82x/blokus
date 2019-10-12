import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const PlayerList = ({players}) => (
   <Card>
    <Card.Header>Lobby</Card.Header>
    <Card.Body>
      <Card.Title> Connected Players <span className="float-right"> {Object.keys(players).length} / 4 </span></Card.Title>
      <ListGroup>
        {players.map ( player => <ListGroup.Item key={player.id} disabled>{player.name}</ListGroup.Item>) }
      </ListGroup>
    </Card.Body>
  </Card>
)

export default PlayerList