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

function switcherWeaveOn(state, action) {
  const newState = initNewState(state);
  newState.numberOfWeaves++;

  if (newState.weaves[action.row] === undefined)
    newState.weaves[action.row] = [];

  newState.weaves[action.row][action.col] = true;
  return newState;
}

function switcherWeaveOff(state, action) {
  const newState = initNewState(state);
  newState.numberOfWeaves--;

  if (newState.weaves[action.row] === undefined)
    newState.weaves[action.row] = [];

  newState.weaves[action.row][action.col] = false;
  return newState;
}

function switcherTieUpOn(state, action) {
  const newState = initNewState(state);

  if (newState.tieUp[action.row] === undefined)
    newState.tieUp[action.row] = [];

  newState.tieUp[action.row][action.col] = true;
  return newState;
}

function switcherTieUpOff(state, action) {
  const newState = initNewState(state);

  if (newState.tieUp[action.row] === undefined)
    newState.tieUp[action.row] = [];

  newState.tieUp[action.row][action.col] = false;
  return newState;
}

function switcherThreadingOn(state, action) {
  const newState = initNewState(state);
  newState.threadings[action.col] = action.row;
  return newState;
}

function switcherThreadingOff(state, action) {
  const newState = initNewState(state);
  newState.threadings[action.col] = undefined;
  return newState;
}

function switcherTreadlingOn(state, action) {
  const newState = initNewState(state);
  newState.treadlings[action.col] = action.row;
  return newState;
}

function switcherTreadlingOff(state, action) {
  const newState = initNewState(state);
  newState.treadlings[action.col] = undefined;
  return newState;
}

function switcher4(state, action) {
  switch (action.type) {
    case WEAVE_ON: return switcherWeaveOn(state, action);
    case WEAVE_OFF: return switcherWeaveOff(state, action);
    case TIE_UP_ON: return switcherTieUpOn(state, action);
    case TIE_UP_OFF: return switcherTieUpOff(state, action);
    case THREADING_ON: return switcherThreadingOn(state, action);
    case THREADING_OFF: return switcherThreadingOff(state, action);
    case TREADLING_ON: return switcherTreadlingOn(state, action);
    case TREADLING_OFF: return switcherTreadlingOff(state, action);
    default:
      return initialState;
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
