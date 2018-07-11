import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { BrowserRouter } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import saga from 'saga';

import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';
import './globalSyles';
import 'assets/css/antd.css';
const store = createStore(
  reducers,
  applyMiddleware(logger, createSagaMiddleware())
);

createSagaMiddleware.run(saga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

registerServiceWorker();
