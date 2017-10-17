export type User = {
  id?: string;
  name?: string;
  email?: string;
  confirmed?: boolean;
  signedup?: boolean;
  interfaceLanguage?: string;
};

export type InitialState = User;
