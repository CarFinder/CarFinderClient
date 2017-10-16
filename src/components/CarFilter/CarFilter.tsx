import * as React from 'react';
import interfaceLanguage from '../../utils/interfaceLanguage';
import './style.less';

export interface Props {
  language: string;
}

export interface State {
  data: {
    mark: string;
    model: string;
    bodyType: string;
    yearFrom: number;
    yearTo: number;
    priceForm: number;
    priceTo: number;
    kmsFrom: number;
    kmsTo: number;
  };
  errors: any;
}

class CarFilter extends React.Component<Props, State> {
  public render() {
    return <div />;
  }
}

export default CarFilter;
