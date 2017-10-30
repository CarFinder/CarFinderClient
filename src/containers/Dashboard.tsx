import { connect, Dispatch } from 'react-redux';
import UserDashboard from '../components/UserDashboard/UserDashboard';
import * as interfaces from '../interfaces';
import * as savedSearchActions from '../redux/actions/savedSearchActions';
import * as savedSearchResultsActions from '../redux/actions/savedSearchResultsActions';

interface DispatchFromProps {
  handleFetchSavedSearchResults: () => void;
  handleDeleteSavedSearch: (data: any) => void;
}

interface StateToProps {
  searchError?: any;
  loading: boolean;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  savedSearchResults: state.savedSearchResults
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleDeleteSavedSearch: (data: any) => dispatch(savedSearchActions.submitSavedFilters(data)),
  handleFetchSavedSearchResults: () => dispatch(savedSearchResultsActions.fetchSavedSearchResults())
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  UserDashboard
);
