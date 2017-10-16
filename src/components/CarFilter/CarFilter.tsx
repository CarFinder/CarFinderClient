import * as React from 'react';
import interfaceLanguage from '../../utils/interfaceLanguage';
import './style.less';

export interface Props {
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleSetCurrentFilter: (payload: any) => void;
  loading: boolean;
  searchError: any;
  language: string;
  carFilters: {
    filterValues: any;
    currentFilter: any;
  };
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
  constructor() {
    super();
    this.state = {
      data: {
        mark: '',
        model: '',
        bodyType: '',
        yearFrom: 0,
        yearTo: 0,
        priceForm: 0,
        priceTo: 0,
        kmsFrom: 0,
        kmsTo: 0
      },
      errors: null
    };
  }
  public componentDidMount() {
    this.props.handleClearError();
    this.props.handleClearFilters();
    this.props.handleFetchMarksValues();
  }
  public render() {
    return <div />;
  }
}

export default CarFilter;
