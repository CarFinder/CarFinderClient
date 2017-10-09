import { combineReducers } from 'redux';
import userReducer from './user';
import formStateReducer from './formState';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  user: userReducer, form: reduxFormReducer, formState: formStateReducer
});

export default rootReducer;
