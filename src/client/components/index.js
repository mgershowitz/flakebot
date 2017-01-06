import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './components/routes';
import App from './components/App.jsx'


render( <Router routes={routes} history={browserHistory} />,
  document.getElementById('root-container')
);

