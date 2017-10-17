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
import interfaceLanguage from '../../utils/interfaceLanguage';

import './style.less';

export interface Props {
  handleClearError: () => any;
  handleLogIn: (userData: UserData) => any;
  loading: boolean;
  authError?: any;
  history: any;
  user: User;
  language: string;
}

class SigninFrom extends React.Component<Props, object> {
  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.user.email) {
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
    const { loading, authError, language } = this.props;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

    return (
      <div className="signup-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                <Grid item className="form-title">
                  <Typography type="display1">{lang.signinForm.title}</Typography>
                </Grid>
                <Grid item className="form-content">
                  {authError && (
                    <Typography type="body1" component="p" color="accent">
                      {lang.authErrors[authError.code.toString()]}
                    </Typography>
                  )}
                  <Form onSubmit={this.handleSubmit} language={language} />
                  {loading && <CircularProgress size={50} />}
                </Grid>
                <Divider />
                <Grid item className="form-links">
                  <Button dense color="accent">
                    <Link to="/restore">{lang.signinForm.changePassword}</Link>
                  </Button>
                  <Button dense color="accent">
                    <Link to="/signup">{lang.signinForm.signupLink}</Link>
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
