interface FormData {
  mark: string;
  model: string;
  bodyType: string;
  yearFrom: number;
  yearTo: number;
  priceFrom: number;
  priceTo: number;
  kmsFrom: number;
  kmsTo: number;
}

const yearValidation = new RegExp('^(194[5-9]|19[5-9]d|200d|201[0-3])$');

export const validateMark = (mark: string): any => {
  const errors: any = {};
  if (!mark) {
    errors.mark = 'Field is required';
  }
  return errors;
};

export const validateYears = (year: number): string => {
  if (!yearValidation.test(String(year))) {
    return 'Please fill in a valid year';
  } else {
    return '';
  }
};

export const validatePairValues = (from: number, to: number): string => {
  if (from > to) {
    return 'Invalid parameters';
  } else {
    return '';
  }
};

export const validateForm = (values: FormData): any => {
  const errors: any = {};
  if (values.yearFrom) {
    errors.yearFrom = validateYears(values.yearFrom);
  }
  if (values.yearTo) {
    errors.yearTo = validateYears(values.yearTo);
  }
  if (values.yearFrom && values.yearTo) {
    errors.yearTo = validatePairValues(values.yearFrom, values.yearTo);
  }
  if (values.priceFrom && values.priceTo) {
    errors.priceTo = validatePairValues(values.priceFrom, values.priceTo);
  }
  if (values.kmsFrom && values.kmsTo) {
    errors.kmsTo = validatePairValues(values.kmsFrom, values.kmsTo);
  }
  return errors;
};
