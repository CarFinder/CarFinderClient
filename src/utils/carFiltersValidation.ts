export interface FormData {
  markId: string;
  modelId: string;
  bodyTypeId: string;
  yearFrom: number;
  yearTo: number;
  priceFrom: number;
  priceTo: number;
  kmsFrom: number;
  kmsTo: number;
}

const yearValidation = new RegExp('^(19[0-9][0-9]|200d|201[0-7])$');

export const validateMark = (markId: string): any => {
  const errors: any = {};
  if (!markId) {
    errors.markId = 'Field is required';
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
  } else {
    return true;
  }
};

export const validateForm = (values: FormData): any => {
  const errors: any = {};
  if (!values.markId) {
    errors.markId = 'Field is required';
  }
  if (values.yearFrom && !validateYears(values.yearFrom)) {
    errors.yearFrom = 'Please fill in a valid year';
  }
  if (values.yearTo && !validateYears(values.yearTo)) {
    errors.yearTo = 'Please fill in a valid year';
  }
  if (values.yearFrom && values.yearTo && !validatePairValues(values.yearFrom, values.yearTo)) {
    errors.yearTo = 'Invalid parameters';
  }
  if (values.priceFrom && values.priceTo && !validatePairValues(values.priceFrom, values.priceTo)) {
    errors.priceTo = 'Invalid parameters';
  }
  if (values.kmsFrom && values.kmsTo && !validatePairValues(values.kmsFrom, values.kmsTo)) {
    errors.kmsTo = 'Invalid parameters';
  }
  return errors;
};
