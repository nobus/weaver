import { combineReducers } from 'redux';

import {
  WEAVE_ON, WEAVE_OFF,
  THREADING_ON, THREADING_OFF,
  TREADLING_ON, TREADLING_OFF,
  TIE_UP_ON, TIE_UP_OFF} from '../constants';

const initialState = {
  weaves: [],
  numberOfWeaves: 0,
  threadings: [],
  treadlings: [],
  tieUp: []
};

function initNewState(state) {
  return Object.assign({}, state,
    {
      weaves: [...state.weaves],
      numberOfWeaves: state.numberOfWeaves,
      threadings: [...state.threadings],
      treadlings: [...state.treadlings],
      tieUp: [...state.tieUp]
    }
  );
}

function switcher4(state, action) {
  let newState;

  switch (action.type) {
    case WEAVE_ON:
      newState = initNewState(state);
      newState.numberOfWeaves++;

      if (newState.weaves[action.row] === undefined)
        newState.weaves[action.row] = [];

      newState.weaves[action.row][action.col] = true;
      return newState;
    case WEAVE_OFF:
      newState = initNewState(state);
      newState.numberOfWeaves--;

      if (newState.weaves[action.row] === undefined)
        newState.weaves[action.row] = [];

      newState.weaves[action.row][action.col] = false;
      return newState;
    case TIE_UP_ON:
      newState = initNewState(state);

      if (newState.tieUp[action.row] === undefined)
        newState.tieUp[action.row] = [];

      newState.tieUp[action.row][action.col] = true;
      return newState;
    case TIE_UP_OFF:
      newState = initNewState(state);

      if (newState.tieUp[action.row] === undefined)
        newState.tieUp[action.row] = [];

      newState.tieUp[action.row][action.col] = false;
      return newState;
    case THREADING_ON:
      newState = initNewState(state);
      newState.threadings[action.col] = action.row;
      return newState;
    case THREADING_OFF:
      newState = initNewState(state);
      newState.threadings[action.col] = undefined;
      return newState;
    case TREADLING_ON:
      newState = initNewState(state);
      newState.treadlings[action.col] = action.row;
      return newState;
    case TREADLING_OFF:
      newState = initNewState(state);
      newState.treadlings[action.col] = undefined;
      return newState;
    default:
      return initialState;
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
