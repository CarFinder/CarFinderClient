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
