import Save from 'material-ui-icons/Save';
import Search from 'material-ui-icons/Search';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { validateForm, validateMark } from '../../utils/carFiltersValidation';
import interfaceLanguage from '../../utils/interfaceLanguage';
import SelectInput from '../Common/FormInputs/SelectInput';
import TextInput from '../Common/FormInputs/TextInput';
import './style.less';

export interface Props {
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
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
    priceFrom: number;
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
        priceFrom: 0,
        priceTo: 0,
        kmsFrom: 0,
        kmsTo: 0
      },
      errors: {}
    };
  }
  public componentDidMount() {
    this.props.handleClearError();
    this.props.handleClearFilters();
    this.props.handleFetchMarksValues();
    this.props.handleFetchBodyTypesValues();
  }

  public onChange = (name: string) => (e: any) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: e.target.value
      }
    });
  };

  public onChangeNumber = (name: string) => (e: any) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: parseInt(e.target.value, 10)
      }
    });
  };

  public onSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateForm(this.state.data);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      this.props.handleSetCurrentFilter(this.state.data);
    }
  };

  public onSubmitMark = () => {
    const errors = validateMark(this.state.data.mark);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      this.props.handleFetchModelsValues(this.state.data.mark);
    }
  };

  public render() {
    const { data, errors } = this.state;
    const { searchError, loading } = this.props;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div className="carfilters-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="column">
              <Paper className="form-container">
                <Grid item className="form-content">
                  {searchError && (
                    <Typography type="subheading" component="p" color="accent">
                      Error here
                    </Typography>
                  )}
                  <form className="form">
                    <div className="form-fullwidth-fields">
                      <SelectInput
                        field="mark"
                        label="Maker"
                        value={data.mark}
                        options={this.props.carFilters.filterValues.marks}
                        onChange={this.onChange}
                        onBlur={this.onSubmitMark}
                        error={errors.mark}
                      />
                      <SelectInput
                        field="model"
                        label="Model"
                        value={data.model}
                        options={this.props.carFilters.filterValues.models}
                        onChange={this.onChange}
                        disabled={!this.props.carFilters.filterValues.models}
                        error={errors.model}
                      />
                    </div>
                    <div className="form-fields">
                      <SelectInput
                        field="bodyType"
                        label="Body Type"
                        value={data.bodyType}
                        options={this.props.carFilters.filterValues.bodyTypes}
                        onChange={this.onChange}
                        error={errors.bodyType}
                      />
                      <TextInput
                        field="yearFrom"
                        label="Year From"
                        type="number"
                        value={data.yearFrom}
                        onChange={this.onChangeNumber}
                        error={errors.yearFrom}
                      />
                      <TextInput
                        field="yearTo"
                        label="Year To"
                        type="number"
                        value={data.yearTo}
                        onChange={this.onChangeNumber}
                        error={errors.yearTo}
                      />
                      <TextInput
                        field="priceFrom"
                        label="Price From"
                        type="number"
                        value={data.priceFrom}
                        onChange={this.onChangeNumber}
                        error={errors.priceFrom}
                      />
                      <TextInput
                        field="priceTo"
                        label="Price To"
                        type="number"
                        value={data.priceTo}
                        onChange={this.onChangeNumber}
                        error={errors.priceTo}
                      />
                      <TextInput
                        field="kmsFrom"
                        label="KMs From"
                        type="number"
                        value={data.kmsFrom}
                        onChange={this.onChangeNumber}
                        error={errors.kmsFrom}
                      />
                      <TextInput
                        field="kmsTo"
                        label="KMs To"
                        type="number"
                        value={data.kmsTo}
                        onChange={this.onChangeNumber}
                        error={errors.kmsTo}
                      />
                    </div>
                    <div className="form-fields pull-right">
                      <Button color="primary" type="button" className="form-control">
                        Save <Save />
                      </Button>
                      <Button raised color="primary" type="submit" className="form-control">
                        Search <Search />
                      </Button>
                    </div>
                  </form>
                </Grid>
                {loading && <CircularProgress size={50} />}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CarFilter;
