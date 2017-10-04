import SigninForm from '../components/SigninForm/SigninForm';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ }: InitialState) {
  return {
    
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.UserAction>) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
