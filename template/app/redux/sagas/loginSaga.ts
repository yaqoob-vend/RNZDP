import { put, call } from 'redux-saga/effects';

import { types as loginTypes } from '../ducks/loginReducer';

export function* login(action) {
  const data = { test: 'loginAction' };
  yield put({ type: loginTypes.LOGIN_SUCCESS, payload: data, status: true });
}
