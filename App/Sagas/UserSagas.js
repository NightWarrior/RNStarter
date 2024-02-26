import { call, put } from 'redux-saga/effects';
import UserActions from '../Redux/UserRedux';
import NavigationService from '../Navigation/NavigationService';

export function* login(api, { username, password }) {
  // Remove these two lines in a normal scenario
  yield put(
    UserActions.loginSuccess({ firstName: 'fname', lastName: 'lname' }),
  );
  NavigationService.reset('Home');
  return;

  // below is how it would be properly
  const { data, ok } = yield call([api, 'login'], username, password);
  if (ok && data?.login) {
    const { user } = data;
    yield put(UserActions.loginSuccess(user));
    NavigationService.reset('Home');
  } else {
    yield put(UserActions.loginFailure());
  }
}
