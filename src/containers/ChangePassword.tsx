import { connect, Dispatch } from 'react-redux';
import ChangePasswordForm from '../components/ChangePasswordForm/ChangePasswordForm';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';

export interface UserData {
  email?: string;
  password?: string;
}

interface PropsInterface {
  handleSubmitEmail: (userData: UserData) => void;
  handleChangePassword: (userData: UserData, token: string) => void;
}

interface StateInterface {
  authError: any;
  loading: boolean;
  language: string;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
  successMessage: state.formState.successMessage,
  language: state.user.interfaceLanguage
});

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleClearError: () => dispatch(formStateActions.setAuthError('')),
  handleClearSuccessMessage: () => dispatch(formStateActions.setSuccessMessage('')),
  handleSubmitEmail: (userData: UserData) => dispatch(actions.userSubmitEmail(userData)),
  handleChangePassword: (userData: UserData, token: string) =>
    dispatch(actions.userChangePassword(userData, token))
});

export default connect<StateInterface, any>(mapStateToProps, mapDispatchToProps)(
  ChangePasswordForm
);
