import classnames from 'classnames';
import * as React from 'react';
import * as interfaces from '../../interfaces';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Modal from '../Common/Modal/Modal';
import SavedSearchResult from './SavedSearchResult/SavedSearchResult';
import './style.less';

export interface Props {
  handleFetchSavedSearchResults: () => void;
  handleRemoveAllFilters: () => void;
  handleRemoveFilterById: (id: string) => void;
  loading: boolean;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
}

export interface State {
  filtersToDisplay: number;
  displayModal: boolean;
}

class SavedSearch extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      filtersToDisplay: 1,
      displayModal: false
    };
  }
  public componentWillMount() {
    this.props.handleFetchSavedSearchResults();
  }

  public handleRemoveFilter = (id: string) => {
    this.props.handleRemoveFilterById(id);
  };

  public handleRemoveAll = () => {
    this.props.handleRemoveAllFilters();
    this.setState({
      displayModal: false
    });
  };

  public handleDeclineAction = () => {
    this.setState({
      displayModal: false
    });
  };

  public render() {
    const { language, loading, savedSearchResults, handleRemoveFilterById } = this.props;
    const { filtersToDisplay, displayModal } = this.state;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

    const renderFilters = (
      <div>
        {savedSearchResults.length > 0 &&
          savedSearchResults
            .map((value: interfaces.SavedFilterResults) => (
              <article key={value.filterId}>
                <SavedSearchResult
                  language={language}
                  name={value.filterName}
                  id={value.filterId}
                  ads={value.ads}
                  url={value.filterUrl}
                  handleRemoveFilter={this.handleRemoveFilter}
                />
              </article>
            ))
            .filter((val, index) => index <= filtersToDisplay)}
      </div>
    );

    return (
      <div className="section">
        <div className="container saved-search-container is-fluid">
          <header className="saved-search-container-head">
            <p className="container-title">{lang.savedSearch.savedFilters}</p>
          </header>
          <div className="columns">
            <div className="column is-centered">
              <button
                type="button"
                disabled={savedSearchResults.length === 0}
                onClick={() =>
                  this.setState({
                    displayModal: true
                  })
                }
                className={classnames('button is-default', {
                  'is-loading': loading
                })}
              >
                {savedSearchResults.length > 0
                  ? lang.savedSearch.clearFilters
                  : lang.savedSearch.noSavedFilters}
                &nbsp;
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
              {renderFilters}
            </div>
          </div>
          {filtersToDisplay < savedSearchResults.length - 1 && (
            <div
              className="display-saved-filters"
              onClick={() =>
                this.setState({
                  filtersToDisplay: savedSearchResults.length
                })
              }
            >
              {lang.savedSearch.seeAllFilters}
            </div>
          )}
        </div>
        {displayModal && (
          <Modal
            type="deleteFilters"
            language={language}
            isActive={true}
            handleConfirmAction={this.handleRemoveAll}
            handleDeclineAction={this.handleDeclineAction}
          />
        )}
      </div>
    );
  }
}

export default SavedSearch;
