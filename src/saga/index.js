import { call, fork } from 'redux-saga/effects';
import loginSaga from './Login';
import signupSaga from './Signup';

export class Request {
  static request(path, options, onSuccess, onError, data) {
    const request = () => {
      options = options || {};
      options = {
        ...options,
        headers: {
          'Content-Type': 'application/json'
        },
        body: data && JSON.stringify(data)
      };
      const url = process.env.API_ENDPOINT + path;
      return fetch(url, options)
        .then(res => res.json());
    };

    return function* loader() {
      try {
        const res = yield call(request);
        yield put(onSuccess(res));
      } catch (e) {
        yield put(onError(e));
      }
    };
  }

  static get(path, onSuccess, onError) {
    const options = {
      method: 'GET'
    };

    return this.request(path, options, onError, onError);
  }

  static post(path, onSuccess, onError, data) {
    const options = {
      method: 'POST'
    };

    return this.request(path, options, onError, onError, data);
  }
}

export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(signupSaga);
};