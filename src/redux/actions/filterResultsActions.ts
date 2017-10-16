import { CarModel } from '../models/filterResultsModel';
import * as actionTypes from './actionTypes';

export interface SetFilterResults {
  type: actionTypes.SET_FILTER_RESULTS;
  payload: CarModel[];
}

export type FilterResultsAction = SetFilterResults;

export function setFilterResults(filterResults: CarModel[]): SetFilterResults {
  return {
    type: actionTypes.SET_FILTER_RESULTS,
    payload: filterResults
  };
}
