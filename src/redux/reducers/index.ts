import { Action, combineReducers, Reducer } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import filterResultsReducer from './filterResults';
import formStateReducer from './formState';
import userReducer from './user';

const rootReducer: Reducer<any> = combineReducers({
  form: reduxFormReducer,
  formState: formStateReducer,
  user: userReducer,
  filterResults: filterResultsReducer
});

export default rootReducer;
