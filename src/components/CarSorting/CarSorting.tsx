import * as React from 'react';
import interfaceLanguage from '../../utils/interfaceLanguage';
import SelectInput from '../Common/FormInputs/SelectInput';
import './style.less';

export interface Props {
  sortingParams: {
    limit: number;
    skip: number;
    sort: any;
  };
  language: string;
  handeSetSortingParams: (payload: any) => void;
}

export interface State {
  limit: number;
  skip: number;
  sort: any;
}

class CarSorting extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      limit: 20,
      skip: 0,
      sort: {
        year: 1,
        price: 1,
        kms: 1
      }
    };
  }

  public onChangeLimit = (value: any, field: string) => {
    this.setState({
      limit: parseInt(value.value, 10)
    });
  };

  public onChangeYearSort = (value: any, field: string) => {
    this.setState({
      ...this.state,
      sort: {
        ...this.state.sort,
        year: parseInt(value.value, 10)
      }
    });
  };

  public onChangeKmsSort = (value: any, field: string) => {
    this.setState({
      ...this.state,
      sort: {
        ...this.state.sort,
        kms: parseInt(value.value, 10)
      }
    });
  };

  public onChangePriceSort = (value: any, field: string) => {
    this.setState({
      ...this.state,
      sort: {
        ...this.state.sort,
        price: parseInt(value.value, 10)
      }
    });
  };

  public updateSortingParams = () => {
    this.props.handeSetSortingParams({
      limit: this.state.limit,
      sort: this.state.sort,
      skip: 0
    });
  };

  public componentDidMount() {
    this.updateSortingParams();
  }
  public render() {
    const { limit, sort } = this.state;
    const { language } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

    const limitValues = [
      {
        value: 20,
        label: 20
      },
      {
        value: 30,
        label: 30
      },
      {
        value: 50,
        label: 50
      }
    ];

    const sortYearValues = [
      {
        value: 1,
        label: lang.selectInputs.Ascending
      },
      {
        value: -1,
        label: lang.selectInputs.Descending
      }
    ];

    const sortKmsValues = [
      {
        value: 1,
        label: lang.selectInputs.Ascending
      },
      {
        value: -1,
        label: lang.selectInputs.Descending
      }
    ];

    const sortPriceValues = [
      {
        value: 1,
        label: lang.selectInputs.Ascending
      },
      {
        value: -1,
        label: lang.selectInputs.Descending
      }
    ];

    return (
      <div className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              <form className="box">
                <div className="columns">
                  <div className="column">
                    <SelectInput
                      field="limit"
                      label={lang.carFilters.adsPerPage}
                      value={limit}
                      options={limitValues}
                      onChange={this.onChangeLimit}
                      onBlur={this.updateSortingParams}
                      language={language}
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      field="year"
                      label={lang.carFilterResults.year}
                      value={sort.year}
                      options={sortYearValues}
                      onChange={this.onChangeYearSort}
                      onBlur={this.updateSortingParams}
                      language={language}
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      field="kms"
                      label={lang.carFilterResults.kms}
                      value={sort.kms}
                      options={sortKmsValues}
                      onChange={this.onChangeKmsSort}
                      onBlur={this.updateSortingParams}
                      language={language}
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      field="price"
                      label={lang.carFilterResults.price}
                      value={sort.price}
                      options={sortPriceValues}
                      onChange={this.onChangePriceSort}
                      onBlur={this.updateSortingParams}
                      language={language}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarSorting;
