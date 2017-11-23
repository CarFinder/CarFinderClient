import { connect, Dispatch } from 'react-redux';
import SignupForm from '../components/SignupForm/SignupForm';
import * as interfaces from '../interfaces';
import * as formStateActions from '../redux/actions/formStateActions';
import * as userActions from '../redux/actions/userActions';

interface DispatchFromProps {
  handleClearError: () => void;
  handleSignup: (userData: interfaces.SignupUserData) => void;
}

interface StateToProps {
  loading: boolean;
  language: string;
  authError?: any;
  signedup: boolean;
  formValues: any;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
  signedup: state.user.signedup,
  language: state.user.interfaceLanguage,
  formValues: state.form.signupForm
});

const mapDispatchToProps = (
  dispatch: Dispatch<userActions.UserAction | formStateActions.FormStateAction>
) => ({
  handleClearError: () => dispatch(formStateActions.setAuthError('')),
  handleSignup: (userData: interfaces.SignupUserData) => dispatch(userActions.userSignup(userData))
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  SignupForm
);
