import { connect, Dispatch } from 'react-redux';
import * as userActions from '../redux/actions/userActions';
import EmailConfirmation from '../components/EmailConfirmation/EmailConfirmation';

interface DispatchFromProps {}

interface StateToProps {
  loading: boolean;
  authError: boolean;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  authError: state.formState.authError
});

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserAction>) => ({});

export default connect<any, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  EmailConfirmation
);
