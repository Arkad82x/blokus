import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import routes from './routes'

const App = () => {

   function handleClick() {
      fetch("/api/test")
      .then(a => a.json())
      .then(a => console.log(a))
      .catch(e => console.error(e))
   }

   return (
     <div>
        <button onClick={handleClick} >request </button>
        <Header/>
       { routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact />
       ))}
        <Footer />
     </div>
   )
}

export default App

