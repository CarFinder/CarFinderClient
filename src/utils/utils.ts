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

export const transformDataForFilters = (values: any[]) => {
  const data: any[] = values.map(value => {
    return {
      label: value.name,
      value: value._id
    };
  });
  return data;
};

export const transformDataForSearch = (filtersData: any, sortingParams: any) => {
  const data: any = {
    filter: {},
    limit: '',
    sort: {},
    skip: null
  };
  data.filter.markId = filtersData.markId;
  if (filtersData.modelId.length !== 0) {
    data.filter.modelId = filtersData.modelId.map((pair: any) => pair.value);
  }
  if (filtersData.bodyTypeId.length !== 0) {
    data.filter.bodyTypeId = filtersData.bodyTypeId.map((pair: any) => pair.value);
  }
  if (filtersData.yearFrom) {
    data.filter.yearFrom = filtersData.yearFrom;
  }
  if (filtersData.yearTo) {
    data.filter.yearTo = filtersData.yearTo;
  }
  if (filtersData.priceFrom) {
    data.filter.priceFrom = filtersData.priceFrom;
  }
  if (filtersData.priceTo) {
    data.filter.priceTo = filtersData.priceTo;
  }
  if (filtersData.kmsFrom) {
    data.filter.kmsFrom = filtersData.kmsFrom;
  }
  if (filtersData.kmsTo) {
    data.filter.kmsTo = filtersData.kmsTo;
  }
  if (sortingParams.limit) {
    data.limit = sortingParams.limit;
  }
  if (sortingParams.skip) {
    data.skip = sortingParams.skip;
  }
  if (sortingParams.sort) {
    data.sort = sortingParams.sort;
  }
  return data;
};
