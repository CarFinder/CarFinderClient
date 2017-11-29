export interface FilterResults {
  filterResults: CarModel[];
  allAdsLoaded?: boolean;
  selectedAd?: string;
}

export interface CarModel {
  _id: string;
  bodyType: string;
  description: string;
  images: string[];
  mark: string;
  kms: number;
  model: string;
  price: number;
  sourceName: string;
  sourceUrl: string;
  year: number;
  isSold?: boolean;
}

export type InitialState = FilterResults;
