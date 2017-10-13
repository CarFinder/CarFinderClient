import * as React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import EmailForm from './WizardForm/EnterEmail';
import PasswordForm from './WizardForm/EnterPassword';
import { UserData } from '../../containers/Signin';
import './style.less';

export interface Props {
  handleSubmitEmail: (userData: UserData) => void;
  handleChangePassword: (userData: UserData, token: string) => void;
  handleClearSuccessMessage: () => void;
  successMessage: string;
  history: any;
  loading: boolean;
  authError?: any;
  location: {
    search: any;
  };
  match: {
    params: {
      token: string;
    };
  };
}

export interface State {
  token: string;
}

class ChangePasswordForm extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      token: ''
    };
  }
  public componentDidMount() {
    if (this.props.successMessage) {
      this.props.handleClearSuccessMessage();
    }
    if (queryString.parse(this.props.location.search).token) {
      const newToken = queryString.parse(this.props.location.search).token;
      this.setState({
        token: newToken
      });
    }
  }

  componentDidUpdate(nextProps: any) {
    if (this.state.token && this.props.successMessage) {
      this.props.history.push('/signin');
    }
  }

  handleEmailSubmit = (userData: UserData) => {
    this.props.handleSubmitEmail(userData);
  };

  handlePasswordSubmit = (userData: UserData) => {
    console.log(userData);
    this.props.handleChangePassword(userData, this.state.token);
  };
  render() {
    const { loading, authError, successMessage } = this.props;
    const { token } = this.state;
    return (
      <div className="signup-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                <Grid item className="form-title">
                  <Typography type="display1">Восстановление пароля</Typography>
                </Grid>
                <Grid item className="form-content">
                  {authError && (
                    <Typography type="body1" component="p" color="accent">
                      Произошла ошибка
                    </Typography>
                  )}
                  {!token && <EmailForm onSubmit={this.handleEmailSubmit} />}
                  {token && <PasswordForm onSubmit={this.handlePasswordSubmit} token={token} />}
                  {loading && <CircularProgress size={50} />}
                  {successMessage && (
                    <Typography type="body1" component="p" color="primary">
                      {successMessage}
                    </Typography>
                  )}
                </Grid>
                <Divider />
                <Grid item className="form-links">
                  <Button dense color="accent">
                    <Link to="/signin">Вернуться на страницу входа</Link>
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

export default ChangePasswordForm;
