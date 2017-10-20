import { connect, Dispatch } from 'react-redux';
import Catalogue from '../components/Catalogue/Catalogue';
import * as carFiltersActions from '../redux/actions/carFiltersActions';
import * as filterResultsActions from '../redux/actions/filterResultsActions';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { CarModel } from '../redux/models/filterResultsModel';
import { InitialState } from '../redux/models/userModel';

interface PropsInterface {
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchModelsValues: (mark: string[]) => void;
  handleFetchBodyTypesValues: () => void;
  handleSetCurrentFilter: (payload: any, sortingParams: any) => void;
  handeSetSortingParams: (payload: any) => void;
  handleUpdateAds: (payload: any, sortingParams: any) => void;
  handleSetAdsAsLoaded: (payloab: boolean) => void;
}

interface StateInterface {
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
  handleFetchModelsValues: (mark: string[]) => dispatch(carFiltersActions.fetchModelsValues(mark)),
  handleSetCurrentFilter: (payload: any, sortingParams: any) =>
    dispatch(carFiltersActions.setCurrentFilter({ payload, sortingParams })),
  handeSetSortingParams: (payload: any) => dispatch(carFiltersActions.setSortingParams(payload)),
  handleUpdateAds: (payload: any, sortingParams: any) =>
    dispatch(carFiltersActions.setCurrentFilter({ payload, sortingParams })),
  handleSetAdsAsLoaded: (payload: boolean) => dispatch(filterResultsActions.setAdsAsLoaded(payload))
});

export default connect<any, PropsInterface>(mapStateToProps, mapDispatchToProps)(Catalogue);
