export interface SigninFormData {
  email: string;
  password: string;
}

const passwordRegEx = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$');
const emailRegExp = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$');

export const validateSignin = (values: SigninFormData): object => {
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
  return errors;
};
