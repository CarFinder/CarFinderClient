export interface SigninUserData {
  email: string;
  password: string;
}

export interface SignupUserData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export interface RestorePasswordUserData {
  email?: string;
  password?: string;
}

export interface ChangeUserAvatar {
  image: string;
  type: string;
}

export interface ChangeUserSettings {
  name?: string;
  email?: string;
  interfaceLanguage?: string;
  subscription?: boolean;
}

export interface SelectOptions {
  label: string;
  value: string;
}

export interface FilterValues {
  marks: SelectOptions[];
  models: SelectOptions[];
  bodyTypes: SelectOptions[];
}

export interface SortingParams {
  limit: number;
  skip: number | null;
  sort: any;
}

export interface CarFilter {
  filter: {
    markId: string;
    modelId?: SelectOptions[] | string[];
    bodyTypeId?: SelectOptions[] | string[];
    yearFrom?: number;
    yearTo?: number;
    priceFrom?: number;
    priceTo?: number;
    kmsFrom?: number;
    kmsTo?: number;
  };
  limit: number;
  skip: number | null;
  sort: any;
}

export interface SavedFilter {
  _id?: string;
  name: string;
  markId: string;
  modelId?: SelectOptions[] | string[];
  bodyTypeId?: SelectOptions[] | string[];
  yearFrom?: number;
  yearTo?: number;
  priceFrom?: number;
  priceTo?: number;
  kmsFrom?: number;
  kmsTo?: number;
}
