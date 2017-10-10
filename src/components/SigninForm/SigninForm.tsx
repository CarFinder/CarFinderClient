import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import Form from './WizardForm/SigninForm';
import { UserData } from '../../containers/Signin';

import './style.less';

export interface Props {
  handleLogIn: (userData: UserData) => any;
  loading: boolean;
  authError?: any;
  history: any;
}

export interface State {
  page: number;
}

const SigninFrom = (props: Props) => {
  const { loading, authError } = props;

  function handleSubmit(userData: UserData) {
    props.handleLogIn(userData);
  }

  if (localStorage.getItem('jwt')) {
    props.history.push('/home');
  }

  return (
    <div className="signup-form">
      <Grid container>
        <Grid item xs={12}>
          <Grid container align="center" direction="column" justify="center">
            <Paper className="form-container">
              <Grid item className="form-title">
                <Typography type="display1">Вход</Typography>
              </Grid>
              <Grid item className="form-content">
                {authError && (
                  <Typography type="body1" component="p" color="accent">
                    {authError.ruMessage}
                  </Typography>
                )}
                <Form onSubmit={handleSubmit} />
                {loading && <CircularProgress size={50} />}
              </Grid>
              <Divider />
              <Grid item className="form-links">
                <Button dense color="accent">
                  <Link to="/restore-password">Забыли пароль?</Link>
                </Button>
                <Button dense color="accent">
                  <Link to="/signup">Зарегистрироваться</Link>
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SigninFrom;
