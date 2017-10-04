export const required = (value: string) => (value ? undefined : 'Обязательное поле');

export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Неверный формат email: name@example.com'
    : undefined;
