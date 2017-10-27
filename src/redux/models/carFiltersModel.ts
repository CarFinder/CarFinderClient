export type CarFilter = {
  filterValues?: {
    marks?: any[];
    models?: any[];
    bodyTypes?: any[];
  };
  currentFilter?: {
    mark?: string;
    model?: string;
    bodyType?: string;
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
};

export type InitialState = CarFilter;
