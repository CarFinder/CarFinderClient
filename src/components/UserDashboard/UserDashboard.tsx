import * as React from 'react';
import * as interfaces from '../../interfaces';
import Calculator from '../Calculator/Calculator';
import LiquidAds from '../LiquidAds/LiquidAds';
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
  handleGetLiquidAds: () => void;
  searchError?: any;
  loading: boolean;
  liquidity: interfaces.CalculateLiquidity;
  language: string;
  savedSearchResults: interfaces.SavedFilterResults[];
  filterValues: interfaces.FilterValues;
  liquidAds: interfaces.LiquidAds[];
}

const UserDashboard = (props: Props) => {
  const {
    language,
    loading,
    liquidity,
    searchError,
    filterValues,
    savedSearchResults,
    liquidAds,
    handleFetchSavedSearchResults,
    handleRemoveAllFilters,
    handleRemoveFilterById,
    handleClearError,
    handleFetchMarksValues,
    handleFetchBodyTypesValues,
    handleFetchModelsValues,
    handleSetLiquidity,
    handleCalculateLiquidity,
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
      <Calculator
        searchError={searchError}
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
