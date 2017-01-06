import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store';

import App from './App.jsx';
import Home from './Home.jsx';
import MyEvents from './MyEvents.jsx';
import Search from './SearchContainer';




module.exports = (
  <Provider>

    <Route path='/' component={App} >
    </Route>
  </Provider>
)




const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='view/:postId' component={Single}/>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'));
