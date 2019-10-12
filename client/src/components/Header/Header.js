import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import routes from '../../routes'
import { Link } from 'react-router-dom'

import logo from './logo.jpg'

export default (props) => {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Text>Play Blokus for free</Navbar.Text>
      </Navbar>
    )
}
