import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';

import { Request } from 'saga/index';
import { SIGNUP, signupSuccess, signupError } from 'actions';

function* signup(action) {
  console.log('Action watched', action);
  yield call(Request.post('/user/signup', signupSuccess, signupError, action.payload));
}

export default function* signupSage() {
  yield takeLatest(SIGNUP, signup);
};