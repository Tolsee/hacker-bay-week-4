// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

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
import theme from './theme';
import 'assets/css/antd.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(saga);

export const AppWithProvider = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  <AppWithProvider />
  , document.getElementById('root'));

registerServiceWorker();

export default store;