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

export const validateMark = (mark: string): any => {
  const errors: any = {};
  if (!mark) {
    errors.mark = 'Field is required';
  }
};

export const validateForm = (values: FormData): any => {
  const errors: any = {};
  return errors;
};
