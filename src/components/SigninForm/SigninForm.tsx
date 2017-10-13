import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../../containers/Signin';
import { User } from '../../redux/models/userModel';
import Form from './WizardForm/SigninForm';

import './style.less';

export interface Props {
  handleClearError: () => any;
  handleLogIn: (userData: UserData) => any;
  loading: boolean;
  authError?: any;
  history: any;
  user: User;
}

class SigninFrom extends React.Component<Props, object> {
  public componentWillReceiveProps(nextProps: Props) {
    if (Object.getOwnPropertyNames(nextProps.user).length !== 0) {
      this.props.history.push('/home');
    }
  }

  componentDidMount() {
    this.props.handleClearError();
  }

  public handleSubmit = (userData: UserData) => {
    this.props.handleLogIn(userData);
  };

  public render() {
    const { loading, authError } = this.props;

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
                  <Form onSubmit={this.handleSubmit} />
                  {loading && <CircularProgress size={50} />}
                </Grid>
                <Divider />
                <Grid item className="form-links">
                  <Button dense color="accent">
                    <Link to="/restore">Забыли пароль?</Link>
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
  }
}

export default SigninFrom;
