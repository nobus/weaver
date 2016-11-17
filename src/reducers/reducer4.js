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

function switcherWeaveOn(newState, action) {
  newState.numberOfWeaves++;

  if (newState.weaves[action.row] === undefined)
    newState.weaves[action.row] = [];

  newState.weaves[action.row][action.col] = true;
  return newState;
}

function switcherWeaveOff(newState, action) {
  newState.numberOfWeaves--;

  if (newState.weaves[action.row] === undefined)
    newState.weaves[action.row] = [];

  newState.weaves[action.row][action.col] = false;
  return newState;
}

function switcherTieUpOn(newState, action) {
  if (newState.tieUp[action.row] === undefined)
    newState.tieUp[action.row] = [];

  newState.tieUp[action.row][action.col] = true;
  return newState;
}

function switcherTieUpOff(newState, action) {
  if (newState.tieUp[action.row] === undefined)
    newState.tieUp[action.row] = [];

  newState.tieUp[action.row][action.col] = false;
  return newState;
}

function switcherThreadingOn(newState, action) {
  newState.threadings[action.col] = action.row;
  return newState;
}

function switcherThreadingOff(newState, action) {
  newState.threadings[action.col] = undefined;
  return newState;
}

function switcherTreadlingOn(newState, action) {
  newState.treadlings[action.col] = action.row;
  return newState;
}

function switcherTreadlingOff(newState, action) {
  newState.treadlings[action.col] = undefined;
  return newState;
}

function switcher4(state, action) {
  switch (action.type) {
    case WEAVE_ON: return switcherWeaveOn(initNewState(state), action);
    case WEAVE_OFF: return switcherWeaveOff(initNewState(state), action);
    case TIE_UP_ON: return switcherTieUpOn(initNewState(state), action);
    case TIE_UP_OFF: return switcherTieUpOff(initNewState(state), action);
    case THREADING_ON: return switcherThreadingOn(initNewState(state), action);
    case THREADING_OFF: return switcherThreadingOff(initNewState(state), action);
    case TREADLING_ON: return switcherTreadlingOn(initNewState(state), action);
    case TREADLING_OFF: return switcherTreadlingOff(initNewState(state), action);
    default:
      return initialState;
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
