import { combineReducers } from 'redux';

import signupReducer from './Login';
import loginReducer from './Signup';

const rootReducers = combineReducers({
  signupReducer,
  loginReducer
});

export default rootReducers;