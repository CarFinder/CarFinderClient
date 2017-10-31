import { connect, Dispatch } from 'react-redux';
import EmailConfirmation from '../components/EmailConfirmation/EmailConfirmation';
import * as userActions from '../redux/actions/userActions';

interface DispatchFromProps {
  handleEmailConfirmation: (token: string) => void;
}

interface StateToProps {
  loading: boolean;
  authError?: any;
  language: string;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError,
  language: state.user.interfaceLanguage
});

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserAction>) => ({
  handleEmailConfirmation: (token: string) => dispatch(userActions.userConfirmEmail(token))
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  EmailConfirmation
);
