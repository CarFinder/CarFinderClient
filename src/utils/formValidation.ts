import language from './interfaceLanguage';

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const nameRegExp = new RegExp(`^[a-zA-Zа-яёА-ЯЁ\s\'\-]+$`);
const passwordRegExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$');
const emailRegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');

export const validateForm = (values: SignupFormData): object => {
  const lang =
    localStorage.getItem('interfaceLanguage') === 'ru'
      ? language.ru.validation
      : language.en.validation;

  const errors: any = {};
  if (!values.name) {
    errors.name = lang.required;
  } else if (!nameRegExp.test(values.name)) {
    errors.name = lang.invalidName;
  }
  if (!values.email) {
    errors.email = lang.required;
  } else if (!emailRegExp.test(values.email)) {
    errors.email = lang.invalidEmail;
  }
  if (!values.password) {
    errors.password = lang.required;
  } else if (!passwordRegExp.test(values.password)) {
    errors.password = lang.invalidPassword;
  }
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = lang.required;
  } else if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = lang.invalidPasswordConfirmation;
  }
  return errors;
};
