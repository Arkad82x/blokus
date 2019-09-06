import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FilledCell(props) {
  return <div style={{height:"18px", width:"18px", backgroundColor:"blue", border:"1px solid black"}}></div>
}

function EmptyCell(props) {
  return <div style={{height:"18px", width:"18px"}}> </div>
}

function Cell(props) {
  switch(props.filled) {
    case 0: return <EmptyCell />
    case 1: return <FilledCell />
    default:
      throw new Error("blockcells may only be 0 or 1")
  }
}

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




class Block extends Component {
  render() {
    return (
      <Col>
      {this.props.mat.map((col, idx) => (
        <Row key={idx}>
          {
            col.map((cell, index) => <Cell key={index} filled={cell}/>)
          }
        </Row>
      ))}
      </Col>
    )
  }
}

export default Block
