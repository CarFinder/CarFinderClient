import { connect, Dispatch } from 'react-redux';
import Catalogue from '../components/Catalogue/Catalogue';
import * as carFiltersActions from '../redux/actions/carFiltersActions';
import * as filterResultsActions from '../redux/actions/filterResultsActions';
import * as formStateActions from '../redux/actions/formStateActions';
import * as savedSearchActions from '../redux/actions/savedSearchActions';
import { CarModel } from '../redux/models/filterResultsModel';
import { InitialState } from '../redux/models/userModel';

interface PropsInterface {
  handleSubmitSavedFilters: (data: any) => void;
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleFetchBodyTypesValues: () => void;
  handleSetCurrentFilter: (payload: any, sortingParams: any) => void;
  handeSetSortingParams: (payload: any) => void;
  handleSetAdsAsLoaded: (payloab: boolean) => void;
}

interface StateInterface {
  successMessage: string;
  searchError: any;
  loading: boolean;
  language: string;
  filterResults: CarModel[];
  carFilters: {
    filterValues: any;
    currentFilter: any;
    sortingParams: any;
  };
}

const mapStateToProps = (state: any) => ({
  successMessage: state.formState.successMessage,
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  filterResults: state.filterResults.filterResults,
  carFilters: state.carFilters,
  adsAreLoaded: state.filterResults.allAdsLoaded
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClearError: () => dispatch(formStateActions.setSearchError('')),
  handleClearFilters: () => dispatch(carFiltersActions.clearFilters()),
  handleFetchMarksValues: () => dispatch(carFiltersActions.fetchMarksValues()),
  handleFetchBodyTypesValues: () => dispatch(carFiltersActions.fetchBodyTypesValues()),
  handleFetchModelsValues: (mark: string) => dispatch(carFiltersActions.fetchModelsValues(mark)),
  handleSetCurrentFilter: (payload: any, sortingParams: any) =>
    dispatch(carFiltersActions.setCurrentFilter(payload, sortingParams)),
  handeSetSortingParams: (payload: any) => dispatch(carFiltersActions.setSortingParams(payload)),
  handleSetAdsAsLoaded: (payload: boolean) =>
    dispatch(filterResultsActions.setAdsAsLoaded(payload)),
  handleSubmitSavedFilters: (data: any) => dispatch(savedSearchActions.submitSavedFilters(data))
});

export default connect<any, PropsInterface>(mapStateToProps, mapDispatchToProps)(Catalogue);
