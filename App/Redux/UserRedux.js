import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['username', 'password'],
  loginSuccess: ['user'],
  loginFailure: null,
});

export const INITIAL_STATE = Immutable({
  user: null,
  loading: false,
});

export const UserTypes = Types;
export default Creators;

// Login auth
export const login = state => {
  return state.merge({ loading: true, error: null });
};
export const loginSuccess = (state, { user }) => {
  return state.merge({ user, loading: false });
};
export const loginFailure = state => {
  return state.merge({ user: null, loading: false });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
