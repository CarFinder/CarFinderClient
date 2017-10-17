import { Action, combineReducers, Reducer } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import formStateReducer from './formState';
import userReducer from './user';

const rootReducer: Reducer<any> = combineReducers({
  form: reduxFormReducer,
  formState: formStateReducer,
  user: userReducer
});

export default rootReducer;
