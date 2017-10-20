import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import * as React from 'react';
import SelectInput from '../Common/FormInputs/SelectInput';
import './style.less';

export interface Props {
  sortingParams: {
    limit: number;
    skip: number;
    sort: {
      field: string;
      sort: number;
    };
  };
  handeSetSortingParams: (payload: any) => void;
}

export interface State {
  limit: number;
  skip: number;
  sortField: string;
  sort: {
    field: string;
    sort: number;
  };
  limitValues: any[];
  sortValues: any[];
}

class CarSorting extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      limit: 20,
      skip: 0,
      sortField: 'year',
      sort: {
        field: 'year',
        sort: -1
      },
      limitValues: [
        {
          id: 20,
          name: 20
        },
        {
          id: 30,
          name: 30
        },
        {
          id: 50,
          name: 50
        }
      ],
      sortValues: [
        {
          id: -1,
          name: 'Ascending'
        },
        {
          id: 1,
          name: 'Descending'
        }
      ]
    };
  }

  public onChangeLimit = (name: string) => (e: any) => {
    this.setState({
      limit: parseInt(e.target.value, 10)
    });
  };

  public onChangeSort = (name: string) => (e: any) => {
    this.setState({
      ...this.state,
      sort: {
        field: name,
        sort: parseInt(e.target.value, 10)
      }
    });
  };

  public updateSortingParams = () => {
    this.props.handeSetSortingParams({
      limit: this.state.limit,
      sort: this.state.sort
    });
  };

  public componentDidMount() {
    this.updateSortingParams();
  }
  public render() {
    const { limit, sort, limitValues, sortValues } = this.state;
    return (
      <Paper className="car-sorting-form">
        <form className="sorting-form">
          <SelectInput
            field="limit"
            label="Ads per page"
            value={limit}
            options={limitValues}
            onChange={this.onChangeLimit}
            onBlur={this.updateSortingParams}
          />
          <SelectInput
            field="year"
            label="Year"
            value={sort.sort}
            options={sortValues}
            onChange={this.onChangeSort}
            onBlur={this.updateSortingParams}
          />
        </form>
      </Paper>
    );
  }
}

export default CarSorting;
