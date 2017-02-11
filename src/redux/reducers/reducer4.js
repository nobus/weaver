import { combineReducers } from 'redux';

import {
  WEAVE_ON, WEAVE_OFF,
  THREADING_ON, THREADING_OFF,
  TREADLING_ON, TREADLING_OFF,
  TIE_UP_ON, TIE_UP_OFF,
  SAVE_SETTINGS} from '../constants';

function initNewState(state) {
  return Object.assign({}, state,
    {
      weaves: [...state.weaves],
      numberOfWeaves: state.numberOfWeaves,
      threadings: [...state.threadings],
      treadlings: [...state.treadlings],
      tieUp: [...state.tieUp],
      settings: Object.assign({}, state.settings)
    }
  );
}

function initialState() {
  const settings = {
    ro: 30,
    ry: 15,
    threadingSize: 4,
    treadlingSize: 4,
    elementSize: 20
  };

  const tieUp = [];
  for (let i = 0; i < settings.treadlingSize; i++) tieUp.push([]);

  const newState = {
    weaves: [],
    numberOfWeaves: 0,
    threadings: [],
    treadlings: [],
    tieUp: tieUp,
    settings: settings
  };

  const store4State = localStorage.getItem('store4State');

  if (store4State) {
    const persistedState = JSON.parse(store4State);
    return persistedState.switcher4;
  } else {
    return newState;
  }
}

function switcherWeaveOn(newState, action) {
  newState.numberOfWeaves++;

  if (newState.weaves[action.row] === undefined
      || newState.weaves[action.row] === null)
    newState.weaves[action.row] = [];

  newState.weaves[action.row][action.col] = true;
  return newState;
}

function switcherWeaveOff(newState, action) {
  newState.numberOfWeaves--;

  if (newState.weaves[action.row] === undefined
      || newState.weaves[action.row] === null)
    newState.weaves[action.row] = [];

  newState.weaves[action.row][action.col] = false;
  return newState;
}

function switcherTieUpOn(newState, action) {
  newState.tieUp[action.row][action.col] = true;
  return newState;
}

function switcherTieUpOff(newState, action) {
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

function saveSettings(newState, action) {
  newState.settings = Object.assign({}, action.settings);
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
    case SAVE_SETTINGS: return saveSettings(initNewState(state), action);
    default: return initialState();
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
