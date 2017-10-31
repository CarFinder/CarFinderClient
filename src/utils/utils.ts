import * as interfaces from '../interfaces';

export const transformDataForSignup = (userData: interfaces.SignupUserData) => {
  return {
    name: userData.name,
    email: userData.email,
    password: userData.password
  };
};

interface ValuesFromApi {
  _id: string;
  name: string;
}

export const transformDataForFilters = (values: ValuesFromApi[]): interfaces.SelectOptions[] => {
  const data: interfaces.SelectOptions[] = values.map(value => {
    return {
      label: value.name,
      value: value._id
    };
  });
  return data;
};

export const transformDataForSave = (values: any): interfaces.SavedFilter => {
  const data: interfaces.SavedFilter = {
    name: values.name,
    markId: values.markId
  };
  if (values.modelId.length !== 0) {
    data.modelId = values.modelId.map((pair: interfaces.SelectOptions) => pair.value);
  }
  if (values.bodyTypeId.length !== 0) {
    data.bodyTypeId = values.bodyTypeId.map((pair: interfaces.SelectOptions) => pair.value);
  }
  if (values.yearFrom) {
    data.yearFrom = values.yearFrom;
  }
  if (values.yearTo) {
    data.yearTo = values.yearTo;
  }
  if (values.priceFrom) {
    data.priceFrom = values.priceFrom;
  }
  if (values.priceTo) {
    data.priceTo = values.priceTo;
  }
  if (values.kmsFrom) {
    data.kmsFrom = values.kmsFrom;
  }
  if (values.kmsTo) {
    data.kmsTo = values.kmsTo;
  }
  return data;
};

export const transformDataForSearch = (
  filtersData: any,
  sortingParams: any
): interfaces.CarFilter => {
  const data: interfaces.CarFilter = {
    filter: {
      markId: filtersData.markId
    },
    limit: 0,
    sort: {},
    skip: null
  };
  data.filter.markId = filtersData.markId;
  if (filtersData.modelId.length !== 0) {
    data.filter.modelId = filtersData.modelId.map((pair: interfaces.SelectOptions) => pair.value);
  }
  if (filtersData.bodyTypeId.length !== 0) {
    data.filter.bodyTypeId = filtersData.bodyTypeId.map(
      (pair: interfaces.SelectOptions) => pair.value
    );
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

export interface FileReaderEventTarget extends EventTarget {
  result: string;
}

export interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

export const toBase64 = async (file: File): Promise<string> => {
  return new Promise<any>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event: FileReaderEvent) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
};
