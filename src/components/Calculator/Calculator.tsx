import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as interfaces from '../../interfaces';
import { validateMark } from '../../utils/carFiltersValidation';
import interfaceLanguage from '../../utils/interfaceLanguage';
import { getPathFromFilters } from '../../utils/utils';
import SelectInput from '../Common/FormInputs/SelectInput';

import './style.less';

export interface Props {
  handleClearError: () => void;
  handleFetchMarksValues: () => void;
  handleFetchBodyTypesValues: () => void;
  handleFetchModelsValues: (mark: string) => void;
  handleSetLiquidity: (data: any) => void;
  handleCalculateLiquidity: (data: any) => void;
  loading: boolean;
  language: string;
  liquidity: number | null;
  filterValues: interfaces.FilterValues;
}

export interface State {
  data: {
    markId: string;
    modelId: string[];
    bodyTypeId: string[];
  };
  url: string;
  errors: any;
  isActive: boolean;
}

class Calculator extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      data: {
        markId: '',
        modelId: [],
        bodyTypeId: []
      },
      url: '',
      errors: {},
      isActive: false
    };
  }

  public componentWillMount() {
    this.props.handleClearError();
    this.props.handleFetchMarksValues();
    this.props.handleFetchBodyTypesValues();
  }

  public componentWillReceiveProps(props: Props) {
    if (props.filterValues.marks.length !== 0 && this.state.data.markId.length === 0) {
      this.setState({
        data: {
          ...this.state.data,
          markId: props.filterValues.marks[0].value
        }
      });
      this.props.handleFetchModelsValues(props.filterValues.marks[0].value);
    }
  }

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

  public onSubmitMark = (markId: string) => {
    const errors = validateMark(markId);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      this.props.handleFetchModelsValues(markId);
    }
  };

  public handleCalculateLiquidity = () => {
    this.props.handleCalculateLiquidity(this.state.data);
    this.setState({
      url: getPathFromFilters(this.state.data)
    });
  };

  public render() {
    const { data, errors } = this.state;
    const { language, loading, filterValues, liquidity } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div>
        <div
          className={classNames('modal', {
            'is-active': this.state.isActive
          })}
        >
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title calculator-title">
                <span>{lang.liquidity.calculator.split(' ')[0]}&nbsp;</span>
                <span>{lang.liquidity.calculator.split(' ')[1]}</span>
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={() =>
                  this.setState({
                    isActive: !this.state.isActive
                  })}
              />
            </header>
            <section className="modal-card-body">
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
              <hr />
              <div className="is-size-4">
                {liquidity !== null && (
                  <div>
                    {`${lang.liquidity.resultsStart} ${liquidity} ${lang.liquidity.resultsEnd}`}
                    <div className="calculator-result">
                      {liquidity > 0 && (
                        <Link to={`/catalog/${this.state.url}`} className="button is-warning">
                          {lang.liquidity.ads}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
                {liquidity === null && lang.liquidity.defaultMsg}
              </div>
            </section>
            <footer className="modal-card-foot calculator-footer">
              <button className="button is-success" onClick={this.handleCalculateLiquidity}>
                {lang.liquidity.calculate}
              </button>
            </footer>
          </div>
        </div>
        <button
          className="button is-warning calculator"
          title="Liquidity calculator"
          onClick={() =>
            this.setState({
              isActive: !this.state.isActive
            })}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default Calculator;
