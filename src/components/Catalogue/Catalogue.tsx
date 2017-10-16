import * as React from 'react';
import { CarModel } from '../../redux/models/filterResultsModel';
import CarFilter from '../CarFilter/CarFilter';
import FilterResults from '../FilterResults/FilterResults';

import './style.less';

export interface Props {
  handleClearError: () => void;
  loading: boolean;
  searchError?: any;
  language: string;
  filterResults: CarModel[];
}

const Catalogue = (props: Props) => {
  const { language, filterResults } = props;
  return (
    <div>
      <CarFilter language={language} />
      <FilterResults filterResults={filterResults} />
    </div>
  );
};

export default Catalogue;
