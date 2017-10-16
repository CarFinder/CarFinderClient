import { connect, Dispatch } from 'react-redux';
import Catalogue from '../components/Catalogue/Catalogue';
import * as formStateActions from '../redux/actions/formStateActions';
import * as actions from '../redux/actions/userActions';
import { InitialState } from '../redux/models/userModel';

interface PropsInterface {
  handleClearError: () => void;
}

interface StateInterface {
  searchError: any;
  loading: boolean;
  language: string;
}

const mapStateToProps = (state: any) => ({
  loading: state.formState.loading,
  searchError: state.formState.searchError,
  language: state.user.interfaceLanguage
});

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleClearError: () => dispatch(formStateActions.setSearchError(''))
});

export default connect<StateInterface, PropsInterface>(mapStateToProps, mapDispatchToProps)(
  Catalogue
);
