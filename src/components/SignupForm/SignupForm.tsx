import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../../containers/Signup';
import FirstPage from './WizardForm/FirstPage';
import FormStepper from './WizardForm/FormStepper';
import LastPage from './WizardForm/LastPage';
import SecondPage from './WizardForm/SecondPage';
import ThirdPage from './WizardForm/ThirdPage';
import interfaceLanguage from '../../utils/interfaceLanguage';

import './style.less';

export interface Props {
  handleClearError: () => any;
  handleSignup: (userData: UserData) => any;
  loading: boolean;
  signedup: boolean;
  authError?: any;
  language: string;
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

  public componentWillReceiveProps(props: Props) {
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

  componentWillMount() {
    this.props.handleClearError();
  }

  public handleSubmit = (userData: UserData) => {
    this.props.handleSignup(userData);
  };

  public nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  public render() {
    const { page } = this.state;
    const { loading, authError, language } = this.props;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

    return (
      <div className="signup-form">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                {page !== 4 && (
                  <Grid item className="form-title">
                    <Typography type="display1">{lang.signupForm.title}</Typography>
                  </Grid>
                )}
                {page !== 4 && (
                  <Grid item className="form-stepper">
                    <FormStepper page={page} language={language} />
                  </Grid>
                )}
                <Grid item className="form-content">
                  {authError && (
                    <Typography type="subheading" component="p" color="accent">
                      {!authError.code && lang.searchErrors.serverUnavailable}
                      {authError.code && lang.authErrors[authError.code.toString()]}
                    </Typography>
                  )}
                  {page === 1 && <FirstPage onSubmit={this.nextPage} language={language} />}
                  {page === 2 && <SecondPage onSubmit={this.nextPage} language={language} />}
                  {page === 3 && <ThirdPage onSubmit={this.handleSubmit} language={language} />}
                  {page === 4 && <LastPage language={language} />}
                  {loading && <CircularProgress size={50} />}
                </Grid>
                <Divider />
                <Grid item className="form-links">
                  <Button dense color="accent">
                    <Link to="/signin">{lang.signupForm.signinLink}</Link>
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
