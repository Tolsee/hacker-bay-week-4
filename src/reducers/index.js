import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loadingBarReducer } from 'react-redux-loading-bar';
import signupReducer from './Signup';
import loginReducer from './Login';

const rootReducers = combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  signupReducer,
  loginReducer,
});

export default rootReducers;