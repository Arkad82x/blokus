import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import routes from './routes'





const App = () => {
      function create() {
         fetch("/api/games/create")
            .then(a => a.json())
            .then(a => console.log("CREATE", a))
            .catch(e => console.error("Server connection test failed"))
      }

      function get() {
         fetch("/api/games")
            .then(a => a.json())
            .then(a => console.log("GET: ", a))
            .catch(e => console.error("Server connection test failed"))
      }
     return (
     <div>
        <button onClick={create}>Create</button>
        <button onClick={get}>Get</button>
        <Header/>
       { routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact />
       ))}
        <Footer />
     </div>
   )
}

export default App

