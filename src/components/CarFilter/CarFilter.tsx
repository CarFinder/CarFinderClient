import Save from 'material-ui-icons/Save';
import Search from 'material-ui-icons/Search';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { CarModel } from '../../redux/models/filterResultsModel';
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
  handleFetchModelsValues: (mark: string[]) => void;
  handleSetCurrentFilter: (payload: any, sortingParams: any) => void;
  handleSetAdsAsLoaded: (payload: boolean) => void;
  handleSetAds: (ads: CarModel[]) => void;
  loading: boolean;
  searchError: any;
  language: string;
  carFilters: {
    filterValues: {
      marks: any[];
      models: any[];
      bodyTypes: any[];
    };
    currentFilter: any;
    sortingParams: any;
  };
}

export interface State {
  data: {
    markId: string[];
    modelId: string[];
    bodyTypeId: string[];
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
        markId: [],
        modelId: [],
        bodyTypeId: [],
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
      this.props.handleSetAds([]);
      this.props.handleSetCurrentFilter(
        this.state.data,
        this.props.carFilters.sortingParams
      );
      this.props.handleSetAdsAsLoaded(false);
    }
  };

  public onSubmitMark = () => {
    const errors = validateMark(this.state.data.markId);
    this.setState({
      errors,
      data: {
        ...this.state.data,
        modelId: []
      }
    });
    if (Object.keys(errors).length === 0) {
      this.props.handleFetchModelsValues(this.state.data.markId);
    }
  };

  public render() {
    const { data, errors } = this.state;
    const { filterValues } = this.props.carFilters;
    const { searchError, loading, language } = this.props;
    const lang =
      language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div className="carfilters-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="column">
              <Paper className="form-container">
                <Grid item className="form-content">
                  {searchError && (
                    <Typography type="subheading" component="p" color="accent">
                      {lang.searchErrors.serverUnavailable}
                    </Typography>
                  )}
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-fullwidth-fields">
                      <SelectInput
                        field="markId"
                        label={lang.carFilters.maker}
                        value={data.markId}
                        options={filterValues.marks}
                        onChange={this.onChange}
                        onBlur={this.onSubmitMark}
                        disabled={filterValues.marks.length === 0}
                        error={errors.markId}
                      />
                      <SelectInput
                        multiple
                        field="modelId"
                        label={lang.carFilters.model}
                        value={data.modelId}
                        options={filterValues.models}
                        onChange={this.onChange}
                        disabled={filterValues.models.length === 0}
                        error={errors.modelId}
                      />
                    </div>
                    <div className="form-fields">
                      <SelectInput
                        multiple
                        field="bodyTypeId"
                        label={lang.carFilters.bodyType}
                        value={data.bodyTypeId}
                        options={filterValues.bodyTypes}
                        onChange={this.onChange}
                        disabled={filterValues.bodyTypes.length === 0}
                        error={errors.bodyTypeId}
                      />
                      <TextInput
                        field="yearFrom"
                        label={lang.carFilters.yearFrom}
                        type="number"
                        value={data.yearFrom}
                        onChange={this.onChangeNumber}
                        error={errors.yearFrom}
                        icon="fa-clock-o"
                      />
                      <TextInput
                        field="yearTo"
                        label={lang.carFilters.yearTo}
                        type="number"
                        value={data.yearTo}
                        onChange={this.onChangeNumber}
                        error={errors.yearTo}
                        icon="fa-clock-o"
                      />
                      <TextInput
                        field="priceFrom"
                        label={lang.carFilters.priceFrom}
                        type="number"
                        value={data.priceFrom}
                        onChange={this.onChangeNumber}
                        error={errors.priceFrom}
                        icon="fa-usd"
                      />
                      <TextInput
                        field="priceTo"
                        label={lang.carFilters.priceTo}
                        type="number"
                        value={data.priceTo}
                        onChange={this.onChangeNumber}
                        error={errors.priceTo}
                        icon="fa-usd"
                      />
                      <TextInput
                        field="kmsFrom"
                        label={lang.carFilters.kmFrom}
                        type="number"
                        value={data.kmsFrom}
                        onChange={this.onChangeNumber}
                        error={errors.kmsFrom}
                        icon="fa-road"
                      />
                      <TextInput
                        field="kmsTo"
                        label={lang.carFilters.kmTo}
                        type="number"
                        value={data.kmsTo}
                        onChange={this.onChangeNumber}
                        error={errors.kmsTo}
                        icon="fa-road"
                      />
                    </div>
                    <div className="form-fields pull-right">
                      <Button
                        color="primary"
                        type="button"
                        className="form-control"
                      >
                        {lang.carFilters.saveFilters} <Save />
                      </Button>
                      <Button
                        raised
                        color="primary"
                        type="submit"
                        className="form-control"
                      >
                        {lang.carFilters.searchFilters} <Search />
                      </Button>
                    </div>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CarFilter;
