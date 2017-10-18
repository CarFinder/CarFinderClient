import * as React from 'react';
import { CarModel } from '../../redux/models/filterResultsModel';
import CarFilter from '../CarFilter/CarFilter';
import CarSorting from '../CarSorting/CarSorting';
import FilterResults from '../FilterResults/FilterResults';

import './style.less';

export interface Props {
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string[]) => void;
  handleSetCurrentFilter: (payload: any) => void;
  handeSetSortingParams: (payload: any) => void;
  loading: boolean;
  searchError?: any;
  language: string;
  filterResults: CarModel[];
  carFilters: {
    filterValues: any;
    currentFilter: any;
    sortingParams: any;
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
    handleFetchModelsValues,
    handeSetSortingParams,
    filterResults
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
      <CarSorting
        sortingParams={carFilters.sortingParams}
        handeSetSortingParams={handeSetSortingParams}
      />
      <FilterResults filterResults={filterResults} />
    </div>
  );
};

export default Catalogue;
