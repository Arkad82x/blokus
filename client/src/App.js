import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { simpleAction } from './actions/simpleAction';


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

const App = ({ result, simpleAction }) => {
   return (
    <div>
      <pre>
         {
          JSON.stringify(result)
         }
      </pre>
      <button onClick={simpleAction}>Test redux action</button>
    </div>
  )
}

const mapStateToProps = state => ({
  result: state.simpleReducer.result
})

const mapDispatchToProps = dispatch => bindActionCreators({ simpleAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
