import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';

import { Request } from 'saga/index';
import { LOGIN, loginSuccess, loginError } from 'actions';

function* login(action) {
  console.log('Action watched', action);
  yield call(Request.post('/user/login', loginSuccess, loginError, action.payload));
}

export default function* loginSage() {
  yield takeLatest(LOGIN, login);
};