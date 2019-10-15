import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'



import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import LinkButton from '../components/LinkButton'

import { APILobby } from '../api'

const Settings = props => (
  <Card>
    <Card.Header> Settings </Card.Header>
  </Card>
)

const Lobby = ({ loading, creating, error, ...props}) => {
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
      </Row>
      <Row>
        <LinkButton to="/home"> Close Lobby </LinkButton>
      </Row>
    </Container>
  )
}

export default Lobby
