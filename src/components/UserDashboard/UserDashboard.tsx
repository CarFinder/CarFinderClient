import * as React from 'react';
import * as interfaces from '../../interfaces';
import SavedSearch from '../SavedSearch/SavedSearch';

import './style.less';

export interface Props {
  handleFetchSavedSearchResults: () => void;
  handleDeleteSavedSearch: (data: any) => void;
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
    handleFetchSavedSearchResults
  } = props;
  return (
    <div>
      <SavedSearch
        language={language}
        loading={loading}
        handleFetchSavedSearchResults={handleFetchSavedSearchResults}
        savedSearchResults={savedSearchResults}
      />
    </div>
  );
};

export default UserDashboard;
