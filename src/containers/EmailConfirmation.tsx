import { connect, Dispatch } from 'react-redux';
import EmailConfirmation from '../components/EmailConfirmation/EmailConfirmation';
import * as userActions from '../redux/actions/userActions';

interface DispatchFromProps {
  handleEmailConfirmation: (token: string) => any;
}

interface StateToProps {
  loading: boolean;
  authError: boolean;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError
});

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserAction>) => ({
  handleEmailConfirmation: (token: string) => dispatch(userActions.userConfirmEmail(token))
});

export default connect<any, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  EmailConfirmation
);
