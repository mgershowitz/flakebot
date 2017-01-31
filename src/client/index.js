import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

// import App from './components/App.jsx';
import Main from './components/Main.jsx'
import Home from './components/Home.jsx';
// import EventDetail from './components/EventDetail.jsx'
import Events from './components/Events.jsx'
// import MyEventDetails from './components/MyEventDetails.jsx'
// import MyEvents from './components/MyEvents.jsx'

const router = (

    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='results' component={Events} />
      </Route>
    </Router>

)



render(router, document.getElementById('container'));
