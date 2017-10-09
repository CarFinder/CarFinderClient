import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import FormStepper from './WizardForm/FormStepper';
import FirstPage from './WizardForm/FirstPage';
import SecondPage from './WizardForm/SecondPage';
import ThirdPage from './WizardForm/ThirdPage';
import LastPage from './WizardForm/LastPage';
import { UserData } from '../../containers/Signup';

import './style.less';

export interface Props {
  handleSignup: (userData: UserData) => any;
  loading: boolean;
  signedup: boolean;
  authError?: any;
}

export interface State {
  page: number;
}

class SignupFrom extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  componentWillReceiveProps(props: Props) {
    if (props.signedup) {
      this.setState({
        page: 4
      });
    } else if (props.authError) {
      this.setState({
        page: 1
      });
    }
  }

  handleSubmit = (userData: UserData) => {
    this.props.handleSignup(userData);
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { page } = this.state;
    const { loading, authError } = this.props;
    return (
      <div className="signup-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                {page !== 4 && (
                  <Grid item className="form-title">
                    <Typography type="display1">Регистрация</Typography>
                  </Grid>
                )}
                {page !== 4 && (
                  <Grid item className="form-stepper">
                    <FormStepper page={page} />
                  </Grid>
                )}
                <Grid item className="form-content">
                  {authError && (
                    <Typography type="body1" component="p" color="accent">
                      {authError}
                    </Typography>
                  )}
                  {page === 1 && <FirstPage onSubmit={this.nextPage} />}
                  {page === 2 && <SecondPage onSubmit={this.nextPage} />}
                  {page === 3 && <ThirdPage onSubmit={this.handleSubmit} />}
                  {page === 4 && <LastPage />}
                  {loading && <CircularProgress size={50} />}
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
