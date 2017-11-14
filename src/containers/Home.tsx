import { connect, Dispatch } from 'react-redux';
import HomePage from '../components/HomePage/HomePage';
import * as interfaces from '../interfaces';
import * as formStateActions from '../redux/actions/formStateActions';
import * as getStatsActions from '../redux/actions/getStatsActions';
import * as submitMessageActions from '../redux/actions/messageActions';

interface DispatchFromProps {
  handleClearAuthError: () => void;
  handleClearSearchError: () => void;
  handleGetStats: () => void;
  handleSubmitMessage: (message: any) => void;
}

interface StateToProps {
  loading: boolean;
  searchError?: any;
  authError?: any;
  language: string;
  successMessage: string;
  stats: interfaces.ServiceStats;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  authError: state.formState.authError,
  language: state.user.interfaceLanguage,
  successMessage: state.formState.successMessage,
  stats: state.getStats
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleSubmitMessage: (message: any) => dispatch(submitMessageActions.submitMessage(message)),
  handleGetStats: () => dispatch(getStatsActions.getStats()),
  handleClearAuthError: () => dispatch(formStateActions.setAuthError('')),
  handleClearSearchError: () => dispatch(formStateActions.setSearchError(''))
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  HomePage
);
