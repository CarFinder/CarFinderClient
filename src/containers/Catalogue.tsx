import { connect, Dispatch } from 'react-redux';
import Catalogue from '../components/Catalogue/Catalogue';
import * as interfaces from '../interfaces';
import * as carFiltersActions from '../redux/actions/carFiltersActions';
import * as filterResultsActions from '../redux/actions/filterResultsActions';
import * as formStateActions from '../redux/actions/formStateActions';
import * as savedSearchActions from '../redux/actions/savedSearchActions';
import { CarModel } from '../redux/models/filterResultsModel';
import { InitialState } from '../redux/models/userModel';

interface DispatchFromProps {
  handleSubmitSavedFilters: (data: interfaces.SavedFilter) => void;
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleFetchBodyTypesValues: () => void;
  handleSetCurrentFilter: (payload: any, sortingParams: interfaces.SortingParams) => void;
  handeSetSortingParams: (payload: interfaces.SortingParams) => void;
  handleSetAdsAsLoaded: (payloab: boolean) => void;
  clearFilterResults: () => void;
  handleShowAdPreview: (id:string) => void;
  handleCloseModal:()=>void;
}

interface StateToProps {
  successMessage: string;
  searchError?: any;
  adsAreLoaded: boolean;
  loading: boolean;
  language: string;
  filterResults: CarModel[];
  carFilters: {
    filterValues: interfaces.FilterValues;
    currentFilter: interfaces.CarFilter;
    sortingParams: interfaces.SortingParams;
  };
  selectedAd:string;
}

const mapStateToProps = (state: any) => ({
  successMessage: state.formState.successMessage,
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  filterResults: state.filterResults.filterResults,
  carFilters: state.carFilters,
  adsAreLoaded: state.filterResults.allAdsLoaded,
  selectedAd:state.filterResults.selectedAd
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClearError: () => dispatch(formStateActions.setSearchError('')),
  handleClearFilters: () => dispatch(carFiltersActions.clearFilters()),
  handleFetchMarksValues: () => dispatch(carFiltersActions.fetchMarksValues()),
  handleFetchBodyTypesValues: () => dispatch(carFiltersActions.fetchBodyTypesValues()),
  handleFetchModelsValues: (mark: string) => dispatch(carFiltersActions.fetchModelsValues(mark)),
  handleSetCurrentFilter: (payload: any, sortingParams: interfaces.SortingParams) =>
    dispatch(carFiltersActions.setCurrentFilter(payload, sortingParams)),
  handeSetSortingParams: (payload: interfaces.SortingParams) =>
    dispatch(carFiltersActions.setSortingParams(payload)),
  handleSetAdsAsLoaded: (payload: boolean) =>
    dispatch(filterResultsActions.setAdsAsLoaded(payload)),
  handleShowAdPreview:(id:string) => dispatch(filterResultsActions.selectAd(id)),
  handleCloseModal:()=> dispatch(filterResultsActions.clearSelectedAd()),
  handleSubmitSavedFilters: (data: interfaces.SavedFilter) =>
    dispatch(savedSearchActions.submitSavedFilters(data)),
  clearFilterResults: () => dispatch(filterResultsActions.clearFilterResults())
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  Catalogue
);
