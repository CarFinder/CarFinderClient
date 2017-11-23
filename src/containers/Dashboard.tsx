import { connect, Dispatch } from 'react-redux';
import UserDashboard from '../components/UserDashboard/UserDashboard';
import * as interfaces from '../interfaces';
import * as calculateLiquidityActions from '../redux/actions/calculateLiquidityActions';
import * as carFiltersActions from '../redux/actions/carFiltersActions';
import * as formStateActions from '../redux/actions/formStateActions';
import * as liquidAdsActions from '../redux/actions/liquidAdsActions';
import * as savedSearchActions from '../redux/actions/savedSearchActions';
import * as savedSearchResultsActions from '../redux/actions/savedSearchResultsActions';

interface DispatchFromProps {
  handleFetchSavedSearchResults: () => void;
  handleRemoveAllFilters: () => void;
  handleRemoveFilterById: (id: string) => void;
  handleCalculateLiquidity: (data: any) => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleGetLiquidAds: () => void;
}

interface StateToProps {
  searchError?: any;
  loading: boolean;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
  liquidity: interfaces.CalculateLiquidity;
  filterValues: interfaces.FilterValues;
  liquidAds: interfaces.LiquidAds[];
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  savedSearchResults: state.savedSearchResults,
  filterValues: state.carFilters.filterValues,
  liquidity: state.calculateLiquidity,
  liquidAds: state.liquidAds.liquidAds,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleRemoveAllFilters: () => dispatch(savedSearchResultsActions.removeAllSavedFilters()),
  handleFetchSavedSearchResults: () =>
    dispatch(savedSearchResultsActions.fetchSavedSearchResults()),
  handleRemoveFilterById: (id: string) =>
    dispatch(savedSearchResultsActions.removeSavedFilterById(id)),
  handleClearError: () => dispatch(formStateActions.setSearchError('')),
  handleFetchMarksValues: () => dispatch(carFiltersActions.fetchMarksValues()),
  handleFetchBodyTypesValues: () => dispatch(carFiltersActions.fetchBodyTypesValues()),
  handleFetchModelsValues: (mark: string) => dispatch(carFiltersActions.fetchModelsValues(mark)),
  handleCalculateLiquidity: (data: interfaces.LiquidityFilter) =>
    dispatch(calculateLiquidityActions.сalculateLiquidity(data)),
  handleGetLiquidAds: () => dispatch(liquidAdsActions.getLiquidAds())
});

export default connect<StateToProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  UserDashboard
);
