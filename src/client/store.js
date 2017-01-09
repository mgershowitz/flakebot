
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index'
import myEvents from './data/events'

const defaultState = {
      myEvents: myEvents,
      // searched: false,
      // selected: false,
      // savedSelected: false,
}


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
