export type User = {
  id?: string;
  name?: string;
  email?: string;
  confirmed?: boolean;
  signedup?: boolean;
};

export type InitialState = User;
