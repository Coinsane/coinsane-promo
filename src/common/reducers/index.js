// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { layout } from './layout';

// Root reducer
export default combineReducers({
  layout,
  entities: combineReducers({}),
  routing: routerReducer,
});
