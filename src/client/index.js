import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import EventDetail from './components/EventDetail.jsx'
import Events from './components/Events.jsx'
import MyEventDetails from './components/MyEventDetails.jsx'
import MyEvents from './components/MyEvents.jsx'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='events/:event' component={EventDetail} />
        <Route path='events' component={Events} />
        <Route path=':user/:event' component={MyEventDetails} />
        <Route path=':user' component={MyEvents} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('container'));
