import * as React from 'react';
import * as interfaces from '../../interfaces';
import SavedSearch from '../SavedSearch/SavedSearch';

import './style.less';

export interface Props {
  handleFetchSavedSearchResults: () => void;
  handleRemoveAllFilters: () => void;
  handleRemoveFilterById: (id: string) => void;
  searchError?: any;
  loading: boolean;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
}

const UserDashboard = (props: Props) => {
  const {
    language,
    loading,
    searchError,
    savedSearchResults,
    handleFetchSavedSearchResults,
    handleRemoveAllFilters,
    handleRemoveFilterById
  } = props;
  return (
    <div>
      <SavedSearch
        language={language}
        loading={loading}
        searchError={searchError}
        handleFetchSavedSearchResults={handleFetchSavedSearchResults}
        handleRemoveAllFilters={handleRemoveAllFilters}
        handleRemoveFilterById={handleRemoveFilterById}
        savedSearchResults={savedSearchResults}
      />
    </div>
  );
};

export default UserDashboard;
