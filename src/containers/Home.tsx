import { connect, Dispatch } from 'react-redux';
import HomePage from '../components/HomePage/HomePage';
import * as submitMessageActions from '../redux/actions/messageActions';

interface DispatchFromProps {
  handleSubmitMessage: (message: any) => void;
}

interface StateToProps {
  loading: boolean;
  searchError?: any;
  language: string;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  successMessage: state.formState.successMessage
});

const mapDispatchToProps = (dispatch: Dispatch<submitMessageActions.SubmitMessage>) => ({
  handleSubmitMessage: (message: any) => dispatch(submitMessageActions.submitMessage(message))
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  HomePage
);
