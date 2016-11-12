import { combineReducers } from 'redux';

import {WEAVE_ON, WEAVE_OFF, THREADING_ON, THREADING_OFF} from '../constants';

const initialState = {
  weaves: [],
  threadings: []
};

function initNewState(state) {
  return Object.assign({}, state,
    {
      weaves: [...state.weaves],
      threadings: [...state.threadings]
    }
  );
}

function switcher4(state, action) {
  let newState;

  switch (action.type) {
    case WEAVE_ON:
      newState = initNewState(state);

      if (newState.weaves[action.row] === undefined)
        newState.weaves[action.row] = [];

      newState.weaves[action.row][action.col] = true;
      return newState;
    case WEAVE_OFF:
      newState = initNewState(state);

      if (newState.weaves[action.row] === undefined)
        newState.weaves[action.row] = [];

      newState.weaves[action.row][action.col] = false;
      return newState;
    case THREADING_ON:
      newState = initNewState(state);
      newState.threadings[action.col] = action.row;

      return newState;
    case THREADING_OFF:
      newState = initNewState(state);
      newState.threadings[action.col] = undefined;

      return newState;
    default:
      return initialState;
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
