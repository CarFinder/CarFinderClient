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
import interfaceLanguage from '../../utils/interfaceLanguage';
import './style.less';

export interface Props {
  handleSubmitEmail: (userData: UserData) => void;
  handleChangePassword: (userData: UserData, token: string) => void;
  handleClearSuccessMessage: () => void;
  handleClearError: () => void;
  successMessage: string;
  history: any;
  loading: boolean;
  authError?: any;
  language: string;
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
    if (this.props.authError) {
      this.props.handleClearError();
    }
    if (queryString.parse(this.props.location.search).token) {
      const newToken = queryString.parse(this.props.location.search).token;
      this.setState({
        token: newToken
      });
    }
  }

  public componentDidUpdate(nextProps: any) {
    if (this.state.token && this.props.successMessage) {
      this.props.history.push('/signin');
    }
  }

  public handleEmailSubmit = (userData: UserData) => {
    this.props.handleSubmitEmail(userData);
  };

  public handlePasswordSubmit = (userData: UserData) => {
    this.props.handleChangePassword(userData, this.state.token);
  };
  render() {
    const { loading, authError, successMessage, language } = this.props;
    const { token } = this.state;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div className="signup-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                <Grid item className="form-title">
                  <Typography type="display1">{lang.changePassword.title}</Typography>
                </Grid>
                <Grid item className="form-content">
                  {authError && (
                    <Typography type="body1" component="p" color="accent">
                      {lang.authErrors[authError.code.toString()]}
                    </Typography>
                  )}
                  {!token && <EmailForm onSubmit={this.handleEmailSubmit} language={language} />}
                  {token && (
                    <PasswordForm onSubmit={this.handlePasswordSubmit} language={language} />
                  )}
                  {loading && <CircularProgress size={50} />}
                  {successMessage && (
                    <Typography type="body1" component="p" color="primary">
                      {successMessage}
                    </Typography>
                  )}
                </Grid>
                <Divider />
                <Grid item className="form-links">
                  <Link to="/signin">
                    <Button dense color="accent">
                      {lang.changePassword.signinLink}
                    </Button>
                  </Link>
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
