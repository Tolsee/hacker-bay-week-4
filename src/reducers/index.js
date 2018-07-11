import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signupReducer from './Login';
import loginReducer from './Signup';

const rootReducers = combineReducers({
  form: formReducer,
  signupReducer,
  loginReducer
});

export default rootReducers;