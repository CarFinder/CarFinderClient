export type CarFilter = {
  filterValues?: {
    marks?: string[];
    models?: string[];
    bodyTypes?: string[];
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
};

export type InitialState = CarFilter;
