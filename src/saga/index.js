import { call, fork, put } from 'redux-saga/effects';
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
      const url = process.env.REACT_APP_API_ENDPOINT + path;
      const response = fetch(url, options);
      let statusCode;

      return response
        .then(res => {
          statusCode = res.status;
          return res.json();
        })
        .then(res => ({
          data: res,
          statusCode
        }));
    };

    return function* loader() {
      try {
        const res = yield call(request);
        console.log(res);
        if (res.statusCode === 200) {
          yield put(onSuccess(res.data));
        } else {
          yield put(onError(res.data));
        }
      } catch (e) {
        yield put(onError(e));
      }
    };
  }

  static get(path, onSuccess, onError) {
    const options = {
      method: 'GET'
    };

    return this.request(path, options, onSuccess, onError);
  }

  static post(path, onSuccess, onError, data) {
    const options = {
      method: 'POST'
    };

    return this.request(path, options, onSuccess, onError, data);
  }
}

export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(signupSaga);
};