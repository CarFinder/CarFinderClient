import classnames from 'classnames';
import queryString from 'query-string';
import Tooltip from 'rc-tooltip';
import * as React from 'react';
import * as interfaces from '../../interfaces';
import { CarModel } from '../../redux/models/filterResultsModel';
import { validateForm, validateFormForSave, validateMark } from '../../utils/carFiltersValidation';
import interfaceLanguage from '../../utils/interfaceLanguage';
import { getPathFromFilters, getStateFromPath } from '../../utils/utils';
import SelectInput from '../Common/FormInputs/SelectInput';
import TextInput from '../Common/FormInputs/TextInput';
import Notification from '../Common/Notification/Notifiation';

import './style.less';

export interface Props {
  handleSetSkip: (skipAmount: number) => void;
  handleClearError: () => void;
  handleClearFilters: () => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleSetCurrentFilter: (payload: any, sortingParams: interfaces.SortingParams) => void;
  handleSetAdsAsLoaded: (payload: boolean) => void;
  handleSetAds: (ads: CarModel[]) => void;
  handleSubmitSavedFilters: (data: interfaces.SavedFilter) => void;
  clearFilterResults: () => void;
  history: {
    replace: (url: string) => void;
  };
  location: {
    search: any;
  };
  loading: boolean;
  successMessage: string;
  searchError: any;
  language: string;
  carFilters: {
    filterValues: interfaces.FilterValues;
    currentFilter: interfaces.CarFilter;
    sortingParams: interfaces.SortingParams;
  };
}

export interface State {
  data: {
    name: string;
    markId: string;
    modelId: string[];
    bodyTypeId: string[];
    yearFrom: number;
    yearTo: number;
    priceFrom: number;
    priceTo: number;
    kmsFrom: number;
    kmsTo: number;
    url: string;
  };
  errors: any;
}

class CarFilter extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        markId: '',
        modelId: [],
        bodyTypeId: [],
        yearFrom: 0,
        yearTo: 0,
        priceFrom: 0,
        priceTo: 0,
        kmsFrom: 0,
        kmsTo: 0,
        url: ''
      },
      errors: {}
    };
  }

  public componentWillMount() {
    this.props.handleClearFilters();
    this.props.handleClearError();
    this.props.handleFetchMarksValues();
    this.props.handleFetchBodyTypesValues();
    this.setFilterName();
  }

  public async componentDidMount() {
    if (queryString.parse(this.props.location.search).mark) {
      this.props.handleFetchModelsValues(queryString.parse(this.props.location.search).mark);
      this.props.clearFilterResults();
      this.props.handleSetAds([]);
      this.props.handleSetSkip(0);

      await this.setStateData(this.props.location.search);
      this.props.handleSetCurrentFilter(this.state.data, {
        ...this.props.carFilters.sortingParams,
        skip: 0
      });
      this.props.handleSetAdsAsLoaded(false);
    }
  }

  public componentWillReceiveProps(props: Props) {
    if (props.carFilters.filterValues.marks.length !== 0 && this.state.data.markId.length === 0) {
      this.setState({
        data: {
          ...this.state.data,
          markId: props.carFilters.filterValues.marks[0].value
        }
      });
      this.props.handleFetchModelsValues(props.carFilters.filterValues.marks[0].value);
    }
  }

  public async setStateData(location: string) {
    const stateFromPath = getStateFromPath(location);
    this.setState({
      data: {
        ...this.state.data,
        markId: stateFromPath.markId,
        modelId: stateFromPath.modelId,
        bodyTypeId: stateFromPath.bodyTypeId,
        yearFrom: stateFromPath.yearFrom,
        yearTo: stateFromPath.yearTo,
        priceFrom: stateFromPath.priceFrom,
        priceTo: stateFromPath.priceTo,
        kmsFrom: stateFromPath.kmsFrom,
        kmsTo: stateFromPath.kmsTo,
        url: location
      }
    });
  }

  public setUrlParams = () => {
    const path = getPathFromFilters(this.state.data);
    this.props.history.replace(`/catalog/${path}`);
  };

  public onChangeSelect = (value: any, field: string) => {
    if (field !== 'markId') {
      this.setState({
        data: {
          ...this.state.data,
          [field]: value
        }
      });
    }
    if (field === 'markId') {
      this.setState({
        data: {
          ...this.state.data,
          [field]: value.value,
          modelId: []
        }
      });
      this.onSubmitMark(value.value);
    }
  };

  public onChangeNumber = (name: string) => (e: any) => {
    let value = e.target.value;
    if (value === '') {
      value = 0;
    }
    this.setState({
      data: {
        ...this.state.data,
        [name]: parseInt(value, 10)
      }
    });
  };

  public onChange = (name: string) => (e: any) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: e.target.value
      }
    });
  };

  public onSubmit = (e: any) => {
    this.props.clearFilterResults();
    e.preventDefault();
    const errors = validateForm(this.state.data);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      this.setUrlParams();
    }
  };

  public onSubmitMark = (markId: string) => {
    const errors = validateMark(markId);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      this.props.handleFetchModelsValues(markId);
    }
  };

  public setFilterName = () => {
    const date: Date = new Date();
    const newName = `Filter ${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    this.setState({
      data: {
        ...this.state.data,
        name: newName
      }
    });
  };

  public onSaveFilter = (e: any) => {
    e.preventDefault();
    const errors = validateFormForSave(this.state.data);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      const filterUrl = getPathFromFilters(this.state.data);
      this.props.handleSubmitSavedFilters({ ...this.state.data, url: filterUrl });
    }
  };

  public render() {
    const { data, errors } = this.state;
    const { filterValues } = this.props.carFilters;
    const { searchError, loading, language, successMessage } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              {searchError && (
                <Notification type="danger" text={lang.searchErrors.serverUnavailable} />
              )}
              {successMessage && <Notification type="success" text={successMessage} />}
              <form className="box" onSubmit={this.onSubmit}>
                <div className="columns">
                  <div className="column">
                    <SelectInput
                      field="markId"
                      label={lang.carFilters.maker}
                      value={data.markId}
                      options={filterValues.marks}
                      onChange={this.onChangeSelect}
                      disabled={filterValues.marks.length === 0}
                      error={errors.markId}
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      multiple
                      field="modelId"
                      label={lang.carFilters.model}
                      value={data.modelId}
                      options={filterValues.models}
                      onChange={this.onChangeSelect}
                      disabled={filterValues.models.length === 0}
                      error={errors.modelId}
                    />
                  </div>
                  <div className="column">
                    <SelectInput
                      multiple
                      field="bodyTypeId"
                      label={lang.carFilters.bodyType}
                      value={data.bodyTypeId}
                      options={filterValues.bodyTypes}
                      onChange={this.onChangeSelect}
                      disabled={filterValues.bodyTypes.length === 0}
                      error={errors.bodyTypeId}
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
                      placeholder="Fill in a min. year"
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
                      placeholder="Fill in a max. year"
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
                      placeholder="Fill in a min. price"
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
                      placeholder="Fill in a max. price"
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
                      placeholder="Fill in a min. kms"
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
                      placeholder="Fill in a max. kms"
                    />
                  </div>
                </div>
                <div className="is-clearfix">
                  <button
                    type="submit"
                    className={classnames('button is-warning is-pulled-right', {
                      'is-loading': loading
                    })}
                  >
                    {lang.carFilters.searchFilters} &nbsp;
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                  <Tooltip
                    placement="bottom"
                    trigger={['hover']}
                    overlay={
                      <TextInput
                        type="text"
                        field="name"
                        label=""
                        placeholder="Enter filter name here"
                        onChange={this.onChange}
                        value={data.name}
                        error={errors.name}
                      />
                    }
                  >
                    <button
                      type="button"
                      onClick={e => this.onSaveFilter(e)}
                      className={classnames('button is-default is-pulled-right', {
                        'is-loading': loading
                      })}
                    >
                      {lang.carFilters.saveFilters} &nbsp;
                      <i className="fa fa-floppy-o" aria-hidden="true" />
                    </button>
                  </Tooltip>
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
