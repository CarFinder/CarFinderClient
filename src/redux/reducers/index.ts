import { Reducer, Action, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from './user';
import formStateReducer from './formState';

const rootReducer: Reducer<any> = combineReducers({
  form: reduxFormReducer,
  formState: formStateReducer,
  user: userReducer
});

export default rootReducer;
