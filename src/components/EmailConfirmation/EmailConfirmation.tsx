import * as React from 'react';
import queryString from 'query-string';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Error from 'material-ui-icons/Error';
import Done from 'material-ui-icons/Done';
import './style.less';

export interface Props {
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
  componentDidMount() {
    if (queryString.parse(this.props.location.search).token) {
      const token = queryString.parse(this.props.location.search).token;
      this.props.handleEmailConfirmation(token);
    }
  }

  componentWillReceiveProps(props: Props) {
    this.setState({
      loading: props.loading,
      hasError: !!props.authError
    });
  }
  render() {
    const { loading, hasError } = this.state;
    return (
      <div className="email-confirmation">
        <Grid container>
          <Grid item xs={12}>
            <Grid container align="center" direction="column" justify="center">
              <Paper className="form-container">
                <Grid item className="form-title">
                  <Typography type="display1">Подтверждение е-мэйла</Typography>
                </Grid>
                <Grid item className="form-content">
                  {loading && (
                    <div>
                      <CircularProgress className="loader" />
                      <Typography type="subheading" component="p">
                        Подтверждаем ваш е-мэйл. Пожалуйста, подождите.
                      </Typography>
                    </div>
                  )}
                  {!loading &&
                    !hasError && (
                      <div className="success-message">
                        <Typography type="subheading" component="p" color="inherit">
                          <Done className="message-icon" /> Е-мэйл подтвержден. Спасибо.
                        </Typography>
                      </div>
                    )}
                  {!loading &&
                    hasError && (
                      <div className="error-message">
                        <Typography type="subheading" component="p" color="inherit">
                          <Error className="message-icon" /> Извините, произошла ошибка. Мы не можем
                          подтвердить ваш е-мэйл.
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
