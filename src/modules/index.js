import { combineReducers } from 'redux';
import scrollState from './scroll/scrollState';

const rootReducer = combineReducers({
  scrollState,
});

export default rootReducer;
