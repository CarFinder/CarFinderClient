import { connect, Dispatch } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import * as interfaces from '../interfaces';
import * as formStateActions from '../redux/actions/formStateActions';
import * as userActions from '../redux/actions/userActions';

interface StateToProps {
  language: string;
  loading: boolean;
  changeUserDataError: any;
  successMessage: string;
  initialValues: {
    email: string;
    name: string;
  };
  image: string;
  subscription: boolean;
}

interface DispatchFromProps {
  handleClearError: () => void;
  handleChangeUserData: (userData: interfaces.ChangeUserSettings) => void;
  handleChangeUserAvatar: (avatar: File) => void;
  handleChangeLanguage: (lang: string | null) => void;
  handleChangeUserSettings: (userSettings: interfaces.ChangeUserSettings) => void;
}

const mapStateToProps = (state: any) => ({
  language: state.user.interfaceLanguage,
  loading: state.formState.loading,
  changeUserDataError: state.formState.changeUserDataError,
  successMessage: state.formState.successMessage,
  initialValues: {
    email: state.user.email,
    name: state.user.name
  },
  image: state.user.image,
  subscription: state.user.subscription
});

const mapDispatchToProps = (
  dispatch: Dispatch<userActions.UserAction | formStateActions.FormStateAction>
) => ({
  handleClearError: () => dispatch(formStateActions.setChangeUserDataError('')),
  handleChangeUserData: (userData: interfaces.ChangeUserSettings) =>
    dispatch(userActions.userChangeUserData(userData)),
  handleChangeUserAvatar: (avatar: File) => dispatch(userActions.userChangeUserAvatar(avatar)),
  handleChangeLanguage: (lang: string) => dispatch(userActions.userChangeLanguage(lang)),
  handleChangeUserSettings: (userSettings: interfaces.ChangeUserSettings) =>
    dispatch(userActions.userChangeUserSettings(userSettings))
});

export default connect<StateToProps, any>(mapStateToProps, mapDispatchToProps)(UserProfile);
