import {all, takeEvery} from 'redux-saga/effects';

import * as login from './loginSaga';

import {types as loginTypes} from '../ducks/loginReducer';

export default function* rootSaga() {
  yield all([takeEvery(loginTypes.LOGIN, login.login)]);
}
