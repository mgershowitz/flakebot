import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import myEvents from './myEvents';
// import comments from './comments';

const rootReducer = combineReducers({myEvents, routing: routerReducer});

export default rootReducer;



