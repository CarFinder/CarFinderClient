import { connect, Dispatch } from 'react-redux';
import Catalogue from '../components/Catalogue/Catalogue';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { CarModel } from '../redux/models/filterResultsModel';
import { InitialState } from '../redux/models/userModel';

interface PropsInterface {
  handleClearError: () => void;
}

interface StateInterface {
  searchError: any;
  loading: boolean;
  language: string;
  filterResults: CarModel[];
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage,
  filterResults: state.filterResults.filterResults
});

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleClearError: () => dispatch(formStateActions.setSearchError(''))
});

export default connect<any, PropsInterface>(mapStateToProps, mapDispatchToProps)(Catalogue);
