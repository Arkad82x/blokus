import React from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import './App.css'

import Header from './components/Header/Header'
import routes from './routes'

const MainContentWrapper = styled.div`
   flex: 1;
`

const AppWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height:100%;
`

const App = () => (
   <AppWrapper>
      <Header/>
      <MainContentWrapper>
         { routes.map(route => (
            <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
         ))}
      </MainContentWrapper>
   </AppWrapper>
)

export default App

