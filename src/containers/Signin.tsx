import { connect, Dispatch } from 'react-redux';
import SigninForm from '../components/SigninForm/SigninForm';
import * as interfaces from '../interfaces';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { User } from '../redux/models/userModel';

interface DispatchFromProps {
  handleClearError: () => void;
  handleLogIn: (userData: interfaces.SigninUserData) => void;
}

interface StateToProps {
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
  handleLogIn: (userData: interfaces.SigninUserData) => dispatch(actions.userSignIn(userData))
});

export default connect<StateToProps, any>(mapStateToProps, mapDispatchToProps)(SigninForm);
