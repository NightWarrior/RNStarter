import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: ['payload'],
});

export const INITIAL_STATE = Immutable({
  initialUrl: null,
});

export const StartupTypes = Types;
export default Creators;

export const startup = (state, payload) => {
  return state.merge(payload);
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup,
});
