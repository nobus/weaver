import {WEAVE_ON, WEAVE_OFF, THREADING_ON, THREADING_OFF} from '../constans';

export function weaveOn(r, c) {
  return {type: WEAVE_ON, row: r, col: c};
}

export function weaveOff(r, c) {
  return {type: WEAVE_OFF, row: r, col: c};
}

export function threadingOn(r) {
  return {type: THREADING_ON, row: r};
}


export function threadingOff(r) {
  return {type: THREADING_OFF, row: r};
}
