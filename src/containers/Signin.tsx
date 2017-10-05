import SigninForm from '../components/SigninForm/SigninForm';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';
import { connect, Dispatch } from 'react-redux';

export interface UserData {
  email: string,
  password: string
}

export function mapDispatchToProps(dispatch: Dispatch<actions.UserAction>) {
  return {
    
  }
}
const mapStateToProps = (state: InitialState) => ({
  id: state.id
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
