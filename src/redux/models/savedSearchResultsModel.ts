import { CarModel } from '../models/filterResultsModel';

export interface SavedSearchResults {
  savedSearchResults: SavedFilter[];
}

export interface SavedFilter {
  filterId: string;
  filterName: string;
  filterUrl: string;
  ads: CarModel[];
}

export type InitialState = SavedSearchResults;
