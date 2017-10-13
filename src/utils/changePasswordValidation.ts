export interface ChangePasswordFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const passwordRegEx = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$');
const emailRegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');

export const validateChangePassword = (values: ChangePasswordFormData): object => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Поле обязательно для заполнения';
  } else if (!emailRegExp.test(values.email)) {
    errors.email = 'Неверный формат е-мэйла';
  }
  if (!values.password) {
    errors.password = 'Поле обязательно для заполнения';
  } else if (!passwordRegEx.test(values.password)) {
    errors.password = 'Неверный формат пароля';
  }
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Поле обязательно для заполнения';
  } else if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'Пароли должны совпадать';
  }
  return errors;
};
