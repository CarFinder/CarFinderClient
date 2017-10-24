import { connect, Dispatch } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import * as formStateActions from '../redux/actions/formStateActions';
import * as userActions from '../redux/actions/userActions';

export interface UserData {
  name: string;
  email: string;
}

interface DispatchFromProps {
  handleClearError: () => any;
  handleChangeUserData: (userData: UserData) => any;
}

const mapStateToProps = (state: any) => ({
  language: state.user.interfaceLanguage,
  loading: state.formState.loading,
  changeUserDataError: state.formState.changeUserDataError,
  initialValues: {
    email: state.user.email,
    name: state.user.name
  }
});

const mapDispatchToProps = (
  dispatch: Dispatch<userActions.UserAction | formStateActions.FormStateAction>
) => ({
  handleClearError: () => dispatch(formStateActions.setAuthError('')),
  handleChangeUserData: (userData: UserData) => dispatch(userActions.userChangeUserData(userData))
});

export default connect<any, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(UserProfile);
