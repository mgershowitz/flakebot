import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
// import MyEvents from './components/MyEvents.jsx';
// import Search from './components/SearchContainer';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('container'));
