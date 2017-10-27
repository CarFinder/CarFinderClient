export type User = {
  id?: string;
  name?: string;
  email?: string;
  confirmed?: boolean;
  signedup?: boolean;
  interfaceLanguage?: string;
  subscription?: string;
};

export type InitialState = User;
