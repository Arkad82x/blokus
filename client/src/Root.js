import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" render={() => (
        <Redirect to="/home" />
      )}/>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
