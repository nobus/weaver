import {
  WEAVE_ON, WEAVE_OFF,
  THREADING_ON, THREADING_OFF,
  TREADLING_ON, TREADLING_OFF,
  TIE_UP_ON, TIE_UP_OFF} from '../constants';

export function weaveOn(r, c) {
  return {type: WEAVE_ON, row: r, col: c};
}

export function weaveOff(r, c) {
  return {type: WEAVE_OFF, row: r, col: c};
}

export function threadingOn(r, c) {
  return {type: THREADING_ON, row: r, col: c};
}

export function threadingOff(r, c) {
  return {type: THREADING_OFF, row: r, col: c};
}

export function treadlingOn(r, c) {
  return {type: TREADLING_ON, row: r, col: c};
}

export function treadlingOff(r, c) {
  return {type: TREADLING_OFF, row: r, col: c};
}

export function tieUpOn(r, c) {
  return {type: TIE_UP_ON, row: r, col: c};
}

export function tieUpOff(r, c) {
  return {type: TIE_UP_OFF, row: r, col: c};
}
