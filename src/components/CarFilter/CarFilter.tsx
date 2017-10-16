import Save from 'material-ui-icons/Save';
import Search from 'material-ui-icons/Search';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Select from 'material-ui/Select';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { validateForm, validateMark } from '../../utils/carFiltersValidation';
import interfaceLanguage from '../../utils/interfaceLanguage';
import { getYearsRange } from '../../utils/utils';
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
  yearsRange: number[];
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
      errors: {},
      yearsRange: getYearsRange()
    };
  }
  public componentDidMount() {
    this.props.handleClearError();
    this.props.handleClearFilters();
    this.props.handleFetchMarksValues();
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
      // fetch models here
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
                      <FormControl className="form-field">
                        <InputLabel htmlFor="mark">Maker</InputLabel>
                        <Select
                          value={data.mark}
                          onChange={this.onChange('mark')}
                          input={<Input id="mark" name="mark" className="form-control" />}
                        >
                          {this.props.carFilters.filterValues.marks.map((marks: string) => {
                            return (
                              <MenuItem key={marks} value={marks}>
                                {marks}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {errors.mark && <FormHelperText>{errors.mark}</FormHelperText>}
                      </FormControl>
                      <FormControl className="form-field">
                        <InputLabel htmlFor="model">Model</InputLabel>
                        <Select
                          value={data.model}
                          onChange={this.onChange('model')}
                          input={<Input id="model" name="model" className="form-control" />}
                        >
                          {this.props.carFilters.filterValues.marks.map((marks: string) => {
                            return (
                              <MenuItem key={marks} value={marks}>
                                {marks}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {errors.model && <FormHelperText>{errors.model}</FormHelperText>}
                      </FormControl>
                    </div>
                    <div className="form-fields">
                      <FormControl className="form-field">
                        <InputLabel htmlFor="bodyType">Body Type</InputLabel>
                        <Select
                          value={data.bodyType}
                          onChange={this.onChange('bodyType')}
                          input={<Input id="bodyType" name="bodyType" className="form-control" />}
                        >
                          {this.props.carFilters.filterValues.marks.map((marks: string) => {
                            return (
                              <MenuItem key={marks} value={marks}>
                                {marks}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {errors.bodyType && <FormHelperText>{errors.bodyType}</FormHelperText>}
                      </FormControl>
                      <FormControl className="form-field">
                        <InputLabel htmlFor="yearFrom">Year From</InputLabel>
                        <Select
                          value={data.yearFrom}
                          onChange={this.onChange('yearFrom')}
                          input={<Input id="yearFrom" name="yearFrom" className="form-control" />}
                        >
                          {this.state.yearsRange.map((year: number) => {
                            return (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {errors.yearFrom && <FormHelperText>{errors.yearFrom}</FormHelperText>}
                      </FormControl>
                      <FormControl className="form-field">
                        <InputLabel htmlFor="yearTo">Year To</InputLabel>
                        <Select
                          value={data.yearTo}
                          onChange={this.onChange('yearTo')}
                          input={<Input id="yearTo" name="yearTo" className="form-control" />}
                        >
                          {this.state.yearsRange.map((year: number) => {
                            return (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {errors.yearTo && <FormHelperText>{errors.yearTo}</FormHelperText>}
                      </FormControl>
                      <FormControl className="form-field">
                        <InputLabel htmlFor="priceForm">Price From, BYN</InputLabel>
                        <Input
                          id="priceForm"
                          name="priceForm"
                          className="form-control"
                          onChange={this.onChange('priceForm')}
                        />
                        {errors.priceForm && <FormHelperText>{errors.priceForm}</FormHelperText>}
                      </FormControl>
                      <FormControl className="form-field">
                        <InputLabel htmlFor="priceTo">Price To, BYN</InputLabel>
                        <Input
                          id="priceTo"
                          name="priceTo"
                          className="form-control"
                          onChange={this.onChange('priceTo')}
                        />
                        {errors.priceTo && <FormHelperText>{errors.priceTo}</FormHelperText>}
                      </FormControl>
                    </div>
                    <div className="form-fields">
                      <FormControl className="form-field">
                        <InputLabel htmlFor="kmsFrom">KMs From</InputLabel>
                        <Input
                          id="kmsFrom"
                          name="kmsFrom"
                          className="form-control"
                          onChange={this.onChange('kmsFrom')}
                        />
                        {errors.kmsFrom && <FormHelperText>{errors.kmsFrom}</FormHelperText>}
                      </FormControl>
                      <FormControl className="form-field">
                        <InputLabel htmlFor="kmsFrom">KMs to</InputLabel>
                        <Input
                          id="kmsTo"
                          name="kmsTo"
                          className="form-control"
                          onChange={this.onChange('kmsTo')}
                        />
                        {errors.kmsTo && <FormHelperText>{errors.kmsTo}</FormHelperText>}
                      </FormControl>
                      <Button color="primary" type="button" className="form-control">
                        Save <Save />
                      </Button>
                      <Button raised color="primary" type="submit" className="form-control">
                        Search <Search />
                      </Button>
                    </div>
                  </form>
                  {loading && <CircularProgress size={50} />}
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
