import Done from 'material-ui-icons/Done';
import Error from 'material-ui-icons/Error';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import queryString from 'query-string';
import * as React from 'react';
import interfaceLanguage from '../../utils/interfaceLanguage';
import './style.less';

export interface Props {
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
  handleEmailConfirmation: (token: string) => any;
}

export interface State {
  loading: boolean;
  hasError: boolean;
}

class EmailConfirmation extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      loading: true,
      hasError: false
    };
  }
  public componentDidMount() {
    if (queryString.parse(this.props.location.search).token) {
      const token = queryString.parse(this.props.location.search).token;
      this.props.handleEmailConfirmation(token);
    }
  }

  public componentWillReceiveProps(props: Props) {
    this.setState({
      loading: props.loading,
      hasError: !!props.authError
    });
  }
  public render() {
    const { loading, hasError } = this.state;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div className="email-confirmation">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                <Grid item className="form-title">
                  <Typography type="display1">{lang.emailConfirmation.title}</Typography>
                </Grid>
                <Grid item className="form-content">
                  {loading && (
                    <div>
                      <CircularProgress className="loader" />
                      <Typography type="subheading" component="p">
                        {lang.emailConfirmation.loadingMessage}
                      </Typography>
                    </div>
                  )}
                  {!loading &&
                    !hasError && (
                      <div className="success-message">
                        <Typography type="subheading" component="p" color="inherit">
                          <Done className="message-icon" /> {lang.emailConfirmation.successMessage}
                        </Typography>
                      </div>
                    )}
                  {!loading &&
                    hasError && (
                      <div className="error-message">
                        <Typography type="subheading" component="p" color="inherit">
                          <Error className="message-icon" /> {lang.emailConfirmation.errorMessage}
                        </Typography>
                      </div>
                    )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EmailConfirmation;
