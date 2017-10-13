import { connect, Dispatch } from 'react-redux';
import SignupForm from '../components/SignupForm/SignupForm';
import * as formStateActions from '../redux/actions/formStateActions';
import * as userActions from '../redux/actions/userActions';

export interface UserData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface DispatchFromProps {
  handleClearError: () => any;
  handleSignup: (userData: UserData) => any;
}

interface StateToProps {
  loading: boolean;
  authError: any;
  signedup: boolean;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
  signedup: state.user.signedup,
  language: state.user.interfaceLanguage
});

const mapDispatchToProps = (
  dispatch: Dispatch<userActions.UserAction | formStateActions.FormStateAction>
) => ({
  handleClearError: () => dispatch(formStateActions.setAuthError('')),
  handleSignup: (userData: UserData) => dispatch(userActions.userSignup(userData))
});

export default connect<any, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(SignupForm);
