export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const passwordRegEx = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$');

export const validateSignup = (values: SignupFormData): object => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Поле обязательно для заполнения';
  }
  if (!values.email) {
    errors.email = 'Поле обязательно для заполнения';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
