import SigninForm from '../components/SigninForm/SigninForm';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';
import { connect, Dispatch } from 'react-redux';

export interface UserData {
  email: string,
  password: string
}

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleLogIn: (userData: UserData) => dispatch(actions.getUserData(userData))
})

export default connect<null,any>(null, mapDispatchToProps)(SigninForm);
