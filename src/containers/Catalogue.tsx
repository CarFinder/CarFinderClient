import { connect, Dispatch } from 'react-redux';
import Catalogue from '../components/Catalogue/Catalogue';
import * as carFiltersActions from '../redux/actions/carFiltersActions';
import * as formStateActions from '../redux/actions/formStateActions';
import { InitialState } from '../redux/models/userModel';

interface PropsInterface {
  handleClearError: () => void;
}

interface StateInterface {
  searchError: any;
  loading: boolean;
  language: string;
  carFilters: {
    filterValues: any;
    currentFilter: any;
  };
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  carFilters: state.carFilters
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClearError: () => dispatch(formStateActions.setSearchError('')),
  handleClearFilters: () => dispatch(carFiltersActions.clearFilters()),
  handleSetFilterValues: (payload: any) => dispatch(carFiltersActions.setFilterValues(payload)),
  handleSetCurrentFilter: (payload: any) => dispatch(carFiltersActions.setCurrentFilter(payload))
});

export default connect<StateInterface, PropsInterface>(mapStateToProps, mapDispatchToProps)(
  Catalogue
);
