import * as React from 'react';
import * as interfaces from '../../interfaces';
import Calculator from '../Calculator/Calculator';
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
        handleFetchSavedSearchResults={handleFetchSavedSearchResults}
        handleRemoveAllFilters={handleRemoveAllFilters}
        handleRemoveFilterById={handleRemoveFilterById}
        savedSearchResults={savedSearchResults}
      />
      <Calculator language={language} loading={loading} />
    </div>
  );
};

export default UserDashboard;
