import queryString from 'query-string';
import { store } from '../index';
import * as interfaces from '../interfaces/index';

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
    url: values.url,
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
    data.filter.modelId =
      typeof filtersData.modelId[0] === 'object'
        ? filtersData.modelId.map((pair: interfaces.SelectOptions) => pair.value)
        : filtersData.modelId;
  }
  if (filtersData.bodyTypeId.length !== 0) {
    data.filter.bodyTypeId =
      typeof filtersData.bodyTypeId[0] === 'object'
        ? filtersData.bodyTypeId.map((pair: interfaces.SelectOptions) => pair.value)
        : filtersData.bodyTypeId;
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

export const getPathFromFilters = (filters: any) => {
  const markPath = `?mark=${filters.markId}`;
  const modelPath = filters.modelId.length
    ? `&model=${filters.modelId.map((model: any) => model.value)}`
    : '';
  const bodyPath = filters.bodyTypeId.length
    ? `&body=${filters.bodyTypeId.map((body: any) => body.value)}`
    : '';
  const yearFromPath = filters.yearFrom ? `&yearFrom=${filters.yearFrom}` : '';
  const yearToPath = filters.yearTo ? `&yearTo=${filters.yearTo}` : '';
  const priceFromPath = filters.priceFrom ? `&priceFrom=${filters.priceFrom}` : '';
  const priceToPath = filters.priceTo ? `&priceTo=${filters.priceTo}` : '';
  const kmFromPath = filters.kmsFrom ? `&kmsFrom=${filters.kmsFrom}` : '';
  const kmToPath = filters.kmsTo ? `&kmsTo=${filters.kmsTo}` : '';

  const path =
    `/catalog/${markPath}${modelPath}${bodyPath}${yearFromPath}` +
    `${yearToPath}${priceFromPath}${priceToPath}${kmFromPath}${kmToPath}`;

  return path;
};

export const getStateFromPath = (path: string) => {
  const url = path.replace('/catalog/', '');
  const mark = queryString.parse(path).mark;
  const model = queryString.parse(path).model;
  const bodyType = queryString.parse(path).body;
  const yearFromVal = queryString.parse(path).yearFrom;
  const yearToVal = queryString.parse(path).yearTo;
  const priceFromVal = queryString.parse(path).priceFrom;
  const priceToVal = queryString.parse(path).priceTo;
  const kmsFromVal = queryString.parse(path).kmsFrom;
  const kmsToVal = queryString.parse(path).kmsTo;

  return {
    markId: mark,
    modelId: model ? model.split(',') : [],
    bodyTypeId: bodyType ? bodyType.split(',') : [],
    yearFrom: yearFromVal ? parseInt(yearFromVal, 10) : 0,
    yearTo: yearToVal ? parseInt(yearToVal, 10) : 0,
    priceFrom: priceFromVal ? parseInt(priceFromVal, 10) : 0,
    priceTo: priceToVal ? parseInt(priceToVal, 10) : 0,
    kmsFrom: kmsFromVal ? parseInt(kmsFromVal, 10) : 0,
    kmsTo: kmsToVal ? parseInt(kmsToVal, 10) : 0
  };
};
