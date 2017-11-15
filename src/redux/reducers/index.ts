import { Action, combineReducers, Reducer } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import carFiltersReducer from './carFilters';
import filterResultsReducer from './filterResults';
import formStateReducer from './formState';
import getStatsReducer from './getStats';
import savedSearchReducer from './savedSearch';
import savedSearchResultsReducer from './savedSearchResults';
import userReducer from './user';

const rootReducer: Reducer<any> = combineReducers({
  form: reduxFormReducer,
  formState: formStateReducer,
  user: userReducer,
  filterResults: filterResultsReducer,
  carFilters: carFiltersReducer,
  savedSearch: savedSearchReducer,
  savedSearchResults: savedSearchResultsReducer,
  getStats: getStatsReducer
});

export default rootReducer;
