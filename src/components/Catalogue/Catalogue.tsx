import * as React from 'react';
import CarFilter from '../CarFilter/CarFilter';
import FilterResults from '../FilterResults/FilterResults';

import './style.less';

export interface Props {
  handleClearError: () => void;
  loading: boolean;
  searchError?: any;
  language: string;
}

const Catalogue = (props: Props) => {
  const { language } = props;
  return (
    <div>
      <CarFilter language={language} />
      <FilterResults language={language} />
    </div>
  );
};

export default Catalogue;
