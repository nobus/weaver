import { combineReducers } from 'redux';

import {WEAVE_ON, WEAVE_OFF} from '../actions/scheme4';

const initialState = {
  weaves: [],
  threadings: []
};

function switcher4(state, action) {
  let newState;

  switch (action.type) {
    default:
      return initialState;
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
