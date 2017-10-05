export const required = (value: string) => (value ? undefined : 'Обязательное поле');

export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Неверный формат email: name@example.com'
    : undefined;

export const password = (value: string) =>
  value && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i.test(value)
    ? 'Неверный формат пароля: не менее 8 символов, по крайней мере одца цифра и один специальный символ'
    : undefined;
