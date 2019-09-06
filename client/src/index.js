import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Root store={configureStore()}/>,
 document.getElementById('root')
);

serviceWorker.register();
