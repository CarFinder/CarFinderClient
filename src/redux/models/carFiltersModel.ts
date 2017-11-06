export interface CarFilter {
  filterValues?: {
    marks?: any[];
    models?: any[];
    bodyTypes?: any[];
  };
  currentFilter?: {
    markId?: string;
    modelId?: string;
    bodyTypeId?: string;
    yearFrom?: number;
    yearTo?: number;
    priceForm?: number;
    priceTo?: number;
    kmsFrom?: number;
    kmsTo?: number;
  };
  sortingParams?: {
    limit?: number;
    skip?: number;
    sort?: string;
  };
}

export type InitialState = CarFilter;
