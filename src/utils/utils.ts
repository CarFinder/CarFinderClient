interface UserDataForSignup {
  name: string;
  email: string;
  password: string;
}

export const transformDataForSignup = (userData: UserDataForSignup) => {
  return {
    name: userData.name,
    email: userData.email,
    password: userData.password
  };
};

export const getYearsRange = () => {
  const currentYear = new Date().getFullYear();
  let startYear: number = 1960;
  const years: number[] = [];
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};
