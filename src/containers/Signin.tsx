import { connect, Dispatch } from 'react-redux';
import SigninForm from '../components/SigninForm/SigninForm';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { InitialState, User } from '../redux/models/userModel';

export interface UserData {
  email: string;
  password: string;
}

interface PropsInterface {
  handleClearError: () => any;
  handleLogIn: (userData: UserData) => any;
}

interface StateInterface {
  authError: any;
  loading: boolean;
  user: User;
  language: string;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
  user: state.user,
  language: state.user.interfaceLanguage
});

const mapDispatchToProps = (
  dispatch: Dispatch<actions.UserAction | formStateActions.FormStateAction>
) => ({
  handleClearError: () => dispatch(formStateActions.setAuthError('')),
  handleLogIn: (userData: UserData) => dispatch(actions.userSignIn(userData))
});

export default connect<StateInterface, any>(mapStateToProps, mapDispatchToProps)(SigninForm);
