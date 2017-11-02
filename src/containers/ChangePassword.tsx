import { connect, Dispatch } from 'react-redux';
import ChangePasswordForm from '../components/ChangePasswordForm/ChangePasswordForm';
import * as interfaces from '../interfaces';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';

interface DispatchFromProps {
  handleSubmitEmail: (userData: interfaces.RestorePasswordUserData) => void;
  handleClearError: () => void;
  handleClearSuccessMessage: () => void;
  handleChangePassword: (userData: interfaces.RestorePasswordUserData, token: string) => void;
}

interface StateToProps {
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClearError: () => dispatch(formStateActions.setAuthError('')),
  handleClearSuccessMessage: () => dispatch(formStateActions.setSuccessMessage('')),
  handleSubmitEmail: (userData: interfaces.RestorePasswordUserData) =>
    dispatch(actions.userSubmitEmail(userData)),
  handleChangePassword: (userData: interfaces.RestorePasswordUserData, token: string) =>
    dispatch(actions.userChangePassword(userData, token))
});

export default connect<StateToProps, any>(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
