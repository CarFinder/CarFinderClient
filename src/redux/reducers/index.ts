import { Action, combineReducers, Reducer } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import filterResultsReducer from './filterResults';
import carFiltersReducer from './carFilters';
import formStateReducer from './formState';
import userReducer from './user';

const rootReducer: Reducer<any> = combineReducers({
  form: reduxFormReducer,
  formState: formStateReducer,
  user: userReducer,
  filterResults: filterResultsReducer,
  carFilters: carFiltersReducer
});

export default rootReducer;
