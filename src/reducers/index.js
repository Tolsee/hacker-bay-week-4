import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signupReducer from './Signup';
import loginReducer from './Login';

const rootReducers = combineReducers({
  form: formReducer,
  signupReducer,
  loginReducer
});

export default rootReducers;