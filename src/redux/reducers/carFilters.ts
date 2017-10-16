import {
  CLEAR_CAR_FILTERS,
  FETCH_MARKS_VALUES,
  SET_CURRENT_FILTER,
  SET_MARKS_VALUES
} from '../actions/actionTypes';
import { InitialState } from '../models/carFiltersModel';

const initialState = {
  filterValues: {
    marks: [],
    models: [],
    bodyTypes: []
  },
  currentFilter: {
    mark: '',
    model: '',
    bodyType: '',
    yearFrom: 0,
    yearTo: 0,
    priceForm: 0,
    priceTo: 0,
    kmsFrom: 0,
    kmsTo: 0
  }
};

export default function carFiltersReducer(
  state: InitialState = initialState,
  action: any
): InitialState {
  switch (action.type) {
    case CLEAR_CAR_FILTERS:
      return {};
    case FETCH_MARKS_VALUES:
      return state;
    case SET_MARKS_VALUES: {
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          marks: action.payload
        }
      };
    }
    case SET_CURRENT_FILTER: {
      return {
        ...state,
        currentFilter: action.payload
      };
    }
    default:
      return state;
  }
}
