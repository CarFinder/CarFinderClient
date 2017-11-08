import * as React from 'react';
import * as interfaces from '../../interfaces';
import Calculator from '../Calculator/Calculator';
import SavedSearch from '../SavedSearch/SavedSearch';

import './style.less';

export interface Props {
  handleFetchSavedSearchResults: () => void;
  handleRemoveAllFilters: () => void;
  handleRemoveFilterById: (id: string) => void;
  handleClearError: () => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleSetLiquidity: (data: any) => void;
  handleCalculateLiquidity: (data: any) => void;
  searchError?: any;
  loading: boolean;
  liquidity: number | null;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
  filterValues: interfaces.FilterValues;
}

const UserDashboard = (props: Props) => {
  const {
    language,
    loading,
    liquidity,
    searchError,
    filterValues,
    savedSearchResults,
    handleFetchSavedSearchResults,
    handleRemoveAllFilters,
    handleRemoveFilterById,
    handleClearError,
    handleFetchMarksValues,
    handleFetchBodyTypesValues,
    handleFetchModelsValues,
    handleSetLiquidity,
    handleCalculateLiquidity
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
      <Calculator
        language={language}
        loading={loading}
        liquidity={liquidity}
        filterValues={filterValues}
        handleClearError={handleClearError}
        handleFetchMarksValues={handleFetchMarksValues}
        handleFetchBodyTypesValues={handleFetchBodyTypesValues}
        handleFetchModelsValues={handleFetchModelsValues}
        handleSetLiquidity={handleSetLiquidity}
        handleCalculateLiquidity={handleCalculateLiquidity}
      />
    </div>
  );
};

export default UserDashboard;
