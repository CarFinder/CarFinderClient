import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/userActions';
import SignupForm from '../components/SignupForm/SignupForm';

const mapDispatchToProps = (dispatch: Dispatch<actionCreators.UserAction>) => {
  return {
    onSubmit: (actionCreators.userSignup, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(SignupForm);
