import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import routes from './routes'

const App = () => {
   return (
     <div>
        <Header/>
       { routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact />
       ))}
        <Footer />
     </div>
  )
}

export default App

