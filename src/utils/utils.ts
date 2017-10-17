import { FormData as FormDataForSearch } from './carFiltersValidation';

interface UserDataForSignup {
  name: string;
  email: string;
  password: string;
}

export const transformDataForSignup = (userData: UserDataForSignup) => {
  return {
    name: userData.name,
    email: userData.email,
    password: userData.password
  };
};

export const transformDataForSearch = (filtersData: FormDataForSearch) => {
  const filter: any = {};
  filter.markId = filtersData.markId;
  if (filtersData.modelId) {
    filter.modelId = filtersData.modelId;
  }
  if (filtersData.bodyTypeId) {
    filter.bodyTypeId = filtersData.bodyTypeId;
  }
  if (filtersData.yearFrom) {
    filter.yearFrom = filtersData.yearFrom;
  }
  if (filtersData.yearTo) {
    filter.yearTo = filtersData.yearTo;
  }
  if (filtersData.priceFrom) {
    filter.priceFrom = filtersData.priceFrom;
  }
  if (filtersData.priceTo) {
    filter.priceTo = filtersData.priceTo;
  }
  if (filtersData.kmsFrom) {
    filter.kmsFrom = filtersData.kmsFrom;
  }
  if (filtersData.kmsTo) {
    filter.kmsTo = filtersData.kmsTo;
  }
  return filter;
};
