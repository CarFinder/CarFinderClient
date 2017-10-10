import { connect, Dispatch } from 'react-redux';
import * as userActions from '../redux/actions/userActions';
import SignupForm from '../components/SignupForm/SignupForm';

export interface UserData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface DispatchFromProps {
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
  signedup: state.user.signedup
});

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserAction>) => ({
  handleSignup: (userData: UserData) => dispatch(userActions.userSignup(userData))
});

export default connect<any, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(SignupForm);
