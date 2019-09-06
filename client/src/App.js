import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { simpleAction } from './actions/simpleAction';
import { NavLink , Route} from 'react-router-dom'

import './App.css';

const App = ({ result, simpleAction }) => {
   return (
     <div>
       <Route path="/home" render={ () => (
        <h1> Welcome Home </h1>
      )}/>
       <Route path="/foobar" render={ () => (
        <h1> Welcome foobar </h1>
      )}/>
       <Route path="/barfoo" render={ () => (
        <h1> Welcome barfoo </h1>
      )}/>
       <NavLink to="/home"> Home </NavLink>
       <NavLink to="/foobar"> Foobar </NavLink>
       <NavLink to="/barfoo"> BarFoo </NavLink>
     </div>
  )
}

const mapStateToProps = state => ({
  result: state.simpleReducer.result
})

const mapDispatchToProps = dispatch => bindActionCreators({ simpleAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
