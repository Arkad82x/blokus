import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Game from './game/game.js'
import Block from './block/Block.js'

import {gen} from './utils/blockgen.js'

function Blocks(props) {
  return (
    <div style={{maxWidth:"400px", height:"100%"}}>
    {props.mats.map((mat, idx) => (
      <div style={{display:"inline-block", margin:"4px"}}>
        <Block key={idx} mat={mat}/>
      </div>
    ))}
   </div>
  )
}

class App extends Component {
  state = {
    data: null
  };

  constructor(props) {
    super(props)

    this.d1 = gen(1)
    this.d2 = gen(2)
    this.d3 = gen(3)
    this.d4 = gen(4)
    this.d5 = gen(5)
    this.d6 = gen(6)
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


  render() {
    return (
      <Row>
        <Col md="auto"><h3>D1</h3> <Blocks mats={this.d1}/> </Col>
        <Col md="auto"><h3>D2</h3> <Blocks mats={this.d2}/> </Col>
        <Col md="auto"><h3>D3</h3> <Blocks mats={this.d3}/> </Col>
        <Col md="auto"><h3>D4</h3> <Blocks mats={this.d4}/> </Col>
        <Col md="auto"><h3>D5</h3> <Blocks mats={this.d5}/> </Col>
        <Col md="auto"><h3>D6</h3> <Blocks mats={this.d6}/> </Col>
      </Row>
    );
  }
}

export default App;
