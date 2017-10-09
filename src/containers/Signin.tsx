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

interface StateInterface {
  authError: any;
  loading: boolean;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleLogIn: (userData: UserData) => dispatch(actions.userSignIn(userData))
})

export default connect<StateInterface, any>(mapStateToProps, mapDispatchToProps)(SigninForm);
