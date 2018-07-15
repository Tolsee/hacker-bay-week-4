import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signupReducer from './Signup';
import loginReducer from './Login';
import { loadingBarReducer } from 'react-redux-loading-bar';

const rootReducers = combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  signupReducer,
  loginReducer,
});

export default rootReducers;