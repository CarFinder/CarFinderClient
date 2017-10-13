import ChangePasswordForm from '../components/ChangePasswordForm/ChangePasswordForm';
import * as actions from '../redux/actions/userActions';
import * as formStateActions from '../redux/actions/formStateActions';
import { InitialState } from '../redux/models/userModel';
import { connect, Dispatch } from 'react-redux';

export interface UserData {
  email?: string;
  password?: string;
}

interface PropsInterface {
  handleSubmitEmail: any;
  handleChangePassword: any;
}

interface StateInterface {
  authError: any;
  loading: boolean;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
  successMessage: state.formState.successMessage
});

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleClearSuccessMessage: () => dispatch(formStateActions.SetSuccessMessage('')),
  handleSubmitEmail: (userData: UserData) => dispatch(actions.userSubmitEmail(userData)),
  handleChangePassword: (userData: UserData, token: string) =>
    dispatch(actions.userChangePassword(userData, token))
});

export default connect<StateInterface, any>(mapStateToProps, mapDispatchToProps)(
  ChangePasswordForm
);
