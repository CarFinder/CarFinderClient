export interface FormState {
  authError?: any;
  searchError?: any;
  loading?: boolean;
  successMessage?: string;
  changeUserDataError?: string;
}

export type InitialState = FormState;
