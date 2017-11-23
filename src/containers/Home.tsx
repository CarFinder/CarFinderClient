import { connect, Dispatch } from 'react-redux';
import HomePage from '../components/HomePage/HomePage';
import * as interfaces from '../interfaces';
import * as formStateActions from '../redux/actions/formStateActions';
import * as getStatsActions from '../redux/actions/getStatsActions';

interface DispatchFromProps {
  handleClearError: () => void;
  handleGetStats: () => void;
  handleSetLoading: (loading: boolean) => void;
  handleSetError: (error: string) => void;
  handleSetSuccessMessage: (message: string) => void;
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
  handleSetLoading: (loading: boolean) => dispatch(formStateActions.setLoading(loading)),
  handleSetError: (error: string) => dispatch(formStateActions.setAuthError(error)),
  handleSetSuccessMessage: (message: string) =>
    dispatch(formStateActions.setSuccessMessage(message)),
  handleGetStats: () => dispatch(getStatsActions.getStats()),
  handleClearError: () =>
    dispatch(formStateActions.setSearchError('') || formStateActions.setAuthError(''))
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  HomePage
);
