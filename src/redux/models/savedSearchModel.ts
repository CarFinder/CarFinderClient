export interface Filter {
  _id: string;
  name: string;
  markId?: string;
  modelId?: string[];
  bodyTypeId?: string[];
  yearFrom?: number;
  yearTo?: number;
  priceForm?: number;
  priceTo?: number;
  kmsFrom?: number;
  kmsTo?: number;
}

export type SavedSearch = {
  savedFilters: Filter[];
};
