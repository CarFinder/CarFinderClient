import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import FormStepper from './WizardForm/FormStepper';
import FirstPage from './WizardForm/FirstPage';
import SecondPage from './WizardForm/SecondPage';
import ThirdPage from './WizardForm/ThirdPage';
import './style.less';

export interface Props {
  onSubmit: any;
}

export interface State {
  page: number;
  loading: boolean;
}

class SignupFrom extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      page: 1,
      loading: false
    };
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const { page, loading } = this.state;
    return (
      <div className="signup-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                <Grid item className="form-title">
                  <Typography type="display1">Регистрация</Typography>
                </Grid>
                <Grid item className="form-stepper">
                  <FormStepper page={page} />
                </Grid>
                <Grid item className="form-content">
                  {page === 1 && <FirstPage onSubmit={this.nextPage} />}
                  {page === 2 && <SecondPage onSubmit={this.nextPage} />}
                  {page === 3 && <ThirdPage onSubmit={this.props.onSubmit} />}
                </Grid>
                <Divider />
                <Grid item className="form-links">
                  <Button dense color="accent">
                    <Link to="/signin">Уже зарегестрированы? Войти.</Link>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignupFrom;
