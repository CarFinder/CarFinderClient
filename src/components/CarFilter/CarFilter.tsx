import classnames from 'classnames';
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
import Notification from '../Common/Notification/Notifiation';
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
      <div className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              {searchError && (
                <Notification
                  type="danger"
                  text={lang.searchErrors.serverUnavailable}
                />
              )}
              <form className="box" onSubmit={this.onSubmit}>
                <div className="columns">
                  <div className="column">
                    <SelectInput
                      field="markId"
                      label={lang.carFilters.maker}
                      value={data.markId}
                      options={filterValues.marks}
                      onChange={this.onChange}
                      onBlur={this.onSubmitMark}
                      disabled={filterValues.marks.length === 0}
                      error={errors.markId}
                      icon="fa-car"
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      field="modelId"
                      label={lang.carFilters.model}
                      value={data.modelId}
                      options={filterValues.models}
                      onChange={this.onChange}
                      disabled={filterValues.models.length === 0}
                      error={errors.modelId}
                      icon="fa-car"
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      field="bodyTypeId"
                      label={lang.carFilters.bodyType}
                      value={data.bodyTypeId}
                      options={filterValues.bodyTypes}
                      onChange={this.onChange}
                      disabled={filterValues.bodyTypes.length === 0}
                      error={errors.bodyTypeId}
                      icon="fa-car"
                    />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <TextInput
                      field="yearFrom"
                      label={lang.carFilters.yearFrom}
                      type="number"
                      value={data.yearFrom}
                      onChange={this.onChangeNumber}
                      error={errors.yearFrom}
                      icon="fa-clock-o"
                    />
                  </div>
                  <div className="column">
                    <TextInput
                      field="yearTo"
                      label={lang.carFilters.yearTo}
                      type="number"
                      value={data.yearTo}
                      onChange={this.onChangeNumber}
                      error={errors.yearTo}
                      icon="fa-clock-o"
                    />
                  </div>
                  <div className="column">
                    <TextInput
                      field="priceFrom"
                      label={lang.carFilters.priceFrom}
                      type="number"
                      value={data.priceFrom}
                      onChange={this.onChangeNumber}
                      error={errors.priceFrom}
                      icon="fa-usd"
                    />
                  </div>
                  <div className="column">
                    <TextInput
                      field="priceTo"
                      label={lang.carFilters.priceTo}
                      type="number"
                      value={data.priceTo}
                      onChange={this.onChangeNumber}
                      error={errors.priceTo}
                      icon="fa-usd"
                    />
                  </div>
                  <div className="column">
                    <TextInput
                      field="kmsFrom"
                      label={lang.carFilters.kmFrom}
                      type="number"
                      value={data.kmsFrom}
                      onChange={this.onChangeNumber}
                      error={errors.kmsFrom}
                      icon="fa-road"
                    />
                  </div>
                  <div className="column">
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
                </div>
                <div className="is-clearfix">
                  <button
                    className={classnames('button is-warning is-pulled-right', {
                      'is-loading': loading
                    })}
                  >
                    {lang.carFilters.searchFilters} &nbsp;
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                  <button className="button is-default is-pulled-right">
                    {lang.carFilters.saveFilters} &nbsp;
                    <i className="fa fa-floppy-o" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarFilter;
