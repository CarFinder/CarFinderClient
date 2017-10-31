import classnames from 'classnames';
import * as React from 'react';
import * as interfaces from '../../interfaces';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Modal from '../Common/Modal/Modal';
import SavedSearchResult from './SavedSearchResult/SavedSearchResult';
import './style.less';

export interface Props {
  handleFetchSavedSearchResults: () => void;
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

  public handleClearFilter = () => {
    return 0;
  };

  public render() {
    const { language, loading, savedSearchResults } = this.props;
    const { filtersToDisplay } = this.state;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

    const renderFilters = (
      <div>
        {savedSearchResults.length &&
          savedSearchResults
            .map((value: interfaces.SavedFilterResults) => (
              <article key={value.filterId}>
                <SavedSearchResult name={value.filterName} ads={value.ads} />
              </article>
            ))
            .filter((val, index) => index <= filtersToDisplay)}
      </div>
    );

    return (
      <div className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              <button
                type="button"
                disabled={savedSearchResults.length === 0}
                onClick={() =>
                  this.setState({
                    displayModal: true
                  })}
                className={classnames('button is-default', {
                  'is-loading': loading
                })}
              >
                Очистить фильтры &nbsp;
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
              <hr />
              {renderFilters}
            </div>
          </div>
          {filtersToDisplay < savedSearchResults.length && (
            <div
              onClick={() =>
                this.setState({
                  filtersToDisplay: savedSearchResults.length
                })}
            >
              Смотреть все
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
