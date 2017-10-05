import { connect, Dispatch } from 'react-redux';
import * as actions from '../redux/actions/userActions';
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

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleSignup: (userData: UserData) => dispatch(actions.userSignup(userData))
});

export default connect<null, DispatchFromProps>(null, mapDispatchToProps)(SignupForm);
