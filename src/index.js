import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import reducers from 'reducers';
import saga from 'saga';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';

const store = createStore(
    reducers,
    applyMiddleware(logger, createSagaMiddleware(saga))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
