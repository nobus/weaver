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

function checkThreading(newState, row) {
  return newState
    .threadings
    .map((e, i) => {return (e === row) ? i : false})
    .filter((e) => {return (e) ? e : undefined});
}

function checkTreadling(newState, col) {
  return newState
    .treadlings
    .map((e, i) => {return (e === col) ? i : false})
    .filter((e) => {return (e) ? e : undefined});
}

function checkTieUpRow(newState, row) {
  const ret = [];

  if (newState.tieUp[row]) {
    for (let i = 0; i < newState.tieUp[row].length; i++) {
      if (newState.tieUp[row][i] === true) ret.push(i);
    }
  }

  return ret;
}

function checkTieUpCol(newState, col) {
  const ret = [];

  for (let i = 0; i < newState.tieUp.length; i++) {
    const tieUpRow = newState.tieUp[i];

    if (tieUpRow && tieUpRow[col] === true) ret.push(i);
  }

  return ret;
}

function switcherTieUpOn(newState, action) {
  if (newState.tieUp[action.row] === undefined)
    newState.tieUp[action.row] = [];

  newState.tieUp[action.row][action.col] = true;

  const weaveCols = checkThreading(newState, action.row);
  const weaveRows = checkTreadling(newState, action.col);

  for (let r = 0; r < weaveRows.length; r++) {
    const weaveRow = weaveRows[r];

    if (newState.weaves[weaveRow] === undefined) newState.weaves[weaveRow] = [];

    for (let c = 0; c < weaveCols.length; c++) {
      const weaveCol = weaveCols[c];
      newState.weaves[weaveRow][weaveCol] = true;
    }
  }

  return newState;
}

function switcherTieUpOff(newState, action) {
  if (newState.tieUp[action.row] === undefined)
    newState.tieUp[action.row] = [];

  newState.tieUp[action.row][action.col] = false;

  const weaveCols = checkThreading(newState, action.row);
  const weaveRows = checkTreadling(newState, action.col);

  for (let r = 0; r < weaveRows.length; r++) {
    const weaveRow = weaveRows[r];

    if (newState.weaves[weaveRow] === undefined) newState.weaves[weaveRow] = [];

    for (let c = 0; c < weaveCols.length; c++) {
      const weaveCol = weaveCols[c];
      newState.weaves[weaveRow][weaveCol] = false;
    }
  }

  return newState;
}

function switcherThreadingOn(newState, action) {
  newState.threadings[action.col] = action.row;

  const tieUpRows = checkTieUpRow(newState, action.row);

  if (tieUpRows.length) {
    for (let r = 0; r < tieUpRows.length; r++) {
      const treadlingCols = checkTreadling(newState, tieUpRows[r]);

      for (let c = 0; c < treadlingCols.length; c++) {
        const weaveRow = treadlingCols[c];
        if (newState.weaves[weaveRow] === undefined) newState.weaves[weaveRow] = [];
        newState.weaves[weaveRow][action.col] = true;
      }
    }
  } else {
    for (let i = 0; i < newState.weaves.length; i++) {
      if (newState.weaves[i]) newState.weaves[i][action.col] = false;
    }
  }

  return newState;
}

function switcherThreadingOff(newState, action) {
  newState.threadings[action.col] = undefined;

  const tieUpRows = checkTieUpRow(newState, action.row);

  for (let r = 0; r < tieUpRows.length; r++) {
    const treadlingCols = checkTreadling(newState, tieUpRows[r]);

    for (let c = 0; c < treadlingCols.length; c++) {
      const weaveRow = treadlingCols[c];
      if (newState.weaves[weaveRow] === undefined) newState.weaves[weaveRow] = [];
      newState.weaves[weaveRow][action.col] = false;
    }
  }

  return newState;
}

function switcherTreadlingOn(newState, action) {
  newState.treadlings[action.col] = action.row;

  const tieUpCols = checkTieUpCol(newState, action.row/*????*/);

  if (tieUpCols.length) {
    newState.weaves[action.col] = [];

    for (let i = 0; i < tieUpCols.length; i++) {
      const threadingRows = checkThreading(newState, tieUpCols[i]);

      for (let ii = 0; ii < threadingRows.length; ii++) {
        const weaveCol = threadingRows[ii];
        if (newState.weaves[action.col] === undefined) newState.weaves[action.col] = [];
        newState.weaves[action.col][weaveCol] = true;
      }
    }
  } else {
    newState.weaves[action.col] = [];
  }

  return newState;
}

function switcherTreadlingOff(newState, action) {
  newState.treadlings[action.col] = undefined;

  const tieUpCols = checkTieUpCol(newState, action.row/*????*/);

  for (let i = 0; i < tieUpCols.length; i++) {
    const threadingRows = checkThreading(newState, tieUpCols[i]);

    for (let ii = 0; ii < threadingRows.length; ii++) {
      const weaveCol = threadingRows[ii];
      if (newState.weaves[action.col] === undefined) newState.weaves[action.col] = [];
      newState.weaves[action.col][weaveCol] = false;
    }
  }

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
    default: return initialState;
  }
}

const reducer4 = combineReducers({switcher4});

export default reducer4;
