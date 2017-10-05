import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from './user';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  user: userReducer
});

export default rootReducer;
