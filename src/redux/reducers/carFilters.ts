import {
  CLEAR_CAR_FILTERS,
  FETCH_BODY_TYPES_VALUES,
  FETCH_MARKS_VALUES,
  FETCH_MODELS_VALUES,
  SET_BODY_TYPES_VALUES,
  SET_CURRENT_FILTER,
  SET_MARKS_VALUES,
  SET_MODELS_VALUES,
  SET_SORTING_PARAMS,
  UPDATE_CURRENT_FILTER
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
  },
  sortingParams: {
    limit: 0,
    skip: 0,
    sort: ''
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
    case FETCH_MODELS_VALUES:
      return state;
    case SET_MODELS_VALUES: {
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          models: action.payload
        }
      };
    }
    case FETCH_BODY_TYPES_VALUES:
      return state;
    case SET_BODY_TYPES_VALUES: {
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          bodyTypes: action.payload
        }
      };
    }
    case SET_CURRENT_FILTER: {
      return {
        ...state,
        currentFilter: action.payload
      };
    }
    case UPDATE_CURRENT_FILTER: {
      return state;
    }
    case SET_SORTING_PARAMS: {
      return {
        ...state,
        sortingParams: action.payload
      };
    }
    default:
      return state;
  }
}
