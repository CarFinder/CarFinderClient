import * as React from 'react';
import * as interfaces from '../../interfaces';
import LiquidAds from '../LiquidAds/LiquidAds';
import SavedSearch from '../SavedSearch/SavedSearch';

import './style.less';

export interface Props {
  handleFetchSavedSearchResults: () => void;
  handleRemoveAllFilters: () => void;
  handleRemoveFilterById: (id: string) => void;
  handleGetLiquidAds: () => void;
  searchError?: any;
  loading: boolean;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
  liquidAds: interfaces.LiquidAds[];
}

const UserDashboard = (props: Props) => {
  const {
    language,
    loading,
    searchError,
    savedSearchResults,
    liquidAds,
    handleFetchSavedSearchResults,
    handleRemoveAllFilters,
    handleRemoveFilterById,
    handleGetLiquidAds
  } = props;
  return (
    <div>
      <LiquidAds liquidAds={liquidAds} handleGetLiquidAds={handleGetLiquidAds} />
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
