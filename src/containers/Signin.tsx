import SigninForm from '../components/SigninForm/SigninForm';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';
import { connect, Dispatch } from 'react-redux';

export interface UserData {
  email: string,
  password: string
}

interface PropsInterface {
  handleLogIn: any;
}

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleLogIn: (userData: UserData) => dispatch(actions.userSignIn(userData))
})

export default connect<null,any>(null, mapDispatchToProps)(SigninForm);
