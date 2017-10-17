import * as React from 'react';
import CarFilter from '../CarFilter/CarFilter';
import FilterResults from '../FilterResults/FilterResults';

import './style.less';

export interface Props {
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleSetCurrentFilter: (payload: any) => void;
  loading: boolean;
  searchError?: any;
  language: string;
  carFilters: {
    filterValues: any;
    currentFilter: any;
  };
}

const Catalogue = (props: Props) => {
  const {
    language,
    loading,
    searchError,
    carFilters,
    handleClearError,
    handleClearFilters,
    handleSetCurrentFilter,
    handleFetchMarksValues,
    handleFetchBodyTypesValues,
    handleFetchModelsValues
  } = props;

  return (
    <div>
      <CarFilter
        language={language}
        handleClearError={handleClearError}
        handleClearFilters={handleClearFilters}
        handleFetchMarksValues={handleFetchMarksValues}
        handleFetchModelsValues={handleFetchModelsValues}
        handleSetCurrentFilter={handleSetCurrentFilter}
        handleFetchBodyTypesValues={handleFetchBodyTypesValues}
        carFilters={carFilters}
        searchError={searchError}
        loading={loading}
      />
      <FilterResults language={language} />
    </div>
  );
};

export default Catalogue;
