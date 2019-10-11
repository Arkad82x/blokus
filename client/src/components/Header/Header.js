import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import routes from '../../routes'
import { Link } from 'react-router-dom'

import logo from './logo.jpg'

const Navigation = () => (
  <Nav>
    { routes.filter(r => r.inMenu).map(({label, path}) => 
      <Nav.Item key={path}>
         <Nav.Link as={Link} to={path}>{label}</Nav.Link>
      </Nav.Item>
    ) }
  </Nav>
)

export default (props) => {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navigation />
      </Navbar>
    )
}
