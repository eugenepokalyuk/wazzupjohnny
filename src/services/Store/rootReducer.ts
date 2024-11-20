import { combineReducers } from 'redux';

import { stateControllerReducer } from './StateController/reducer';

export const rootReducer = combineReducers({
  controller: stateControllerReducer,
});
