import language from './interfaceLanguage';

export interface FormData {
  markId: string;
  modelId: string[];
  bodyTypeId: string[];
  yearFrom: number;
  yearTo: number;
  priceFrom: number;
  priceTo: number;
  kmsFrom: number;
  kmsTo: number;
}

const yearValidation = new RegExp('^(19[0-9][0-9]|200[0-9]|201[0-7])$');
const lang =
  localStorage.getItem('interfaceLanguage') === 'ru'
    ? language.ru.validation
    : language.en.validation;

export const validateMark = (markId: string): any => {
  const errors: any = {};
  if (markId === '') {
    errors.markId = lang.required;
  }
  return errors;
};

export const validateYears = (year: number): boolean => {
  if (!yearValidation.test(String(year))) {
    return false;
  } else {
    return true;
  }
};

export const validatePairValues = (from: number, to: number): boolean => {
  if (from > to) {
    return false;
  } else if (from < 0 || to < 0) {
    return false;
  } else {
    return true;
  }
};

export const validateForm = (values: FormData): any => {
  const errors: any = {};
  if (values.markId === '') {
    errors.markId = lang.required;
  }
  if (values.yearFrom && !validateYears(values.yearFrom)) {
    errors.yearFrom = lang.invalidYear;
  }
  if (values.yearTo && !validateYears(values.yearTo)) {
    errors.yearTo = lang.invalidYear;
  }
  if (values.yearFrom && values.yearTo && !validatePairValues(values.yearFrom, values.yearTo)) {
    errors.yearFrom = lang.invalidParameters;
    errors.yearTo = lang.invalidParameters;
  }
  if (values.priceFrom && values.priceTo && !validatePairValues(values.priceFrom, values.priceTo)) {
    errors.priceFrom = lang.invalidParameters;
    errors.priceTo = lang.invalidParameters;
  }
  if (values.kmsFrom && values.kmsTo && !validatePairValues(values.kmsFrom, values.kmsTo)) {
    errors.kmsTo = lang.invalidParameters;
  }
  return errors;
};
