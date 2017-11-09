import queryString from 'query-string';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as interfaces from '../../interfaces';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Notification from '../Common/Notification/Notifiation';
import EmailForm from './WizardForm/EnterEmail';
import PasswordForm from './WizardForm/EnterPassword';

import './style.less';

export interface Props {
  handleSubmitEmail: (userData: interfaces.RestorePasswordUserData) => void;
  handleChangePassword: (userData: interfaces.RestorePasswordUserData, token: string) => void;
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

class ChangePasswordForm extends React.PureComponent<Props, State> {
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

  public componentDidUpdate(nextProps: Props) {
    if (this.state.token && this.props.successMessage) {
      this.props.history.push('/signin');
    }
  }

  public handleEmailSubmit = (userData: interfaces.RestorePasswordUserData) => {
    this.props.handleSubmitEmail(userData);
  };

  public handlePasswordSubmit = (userData: interfaces.RestorePasswordUserData) => {
    this.props.handleChangePassword(userData, this.state.token);
  };

  public render() {
    const { loading, authError, successMessage, language } = this.props;
    const { token } = this.state;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    const errorMessage = !authError.code
      ? lang.errors.serverUnavailable
      : lang.errors[authError.code.toString()];
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-centered">
              {authError && <Notification type="danger" text={errorMessage} />}
              {successMessage && <Notification type="success" text={successMessage} />}
              <div className="box">
                <h1 className="is-size-3 has-text-centered">{lang.changePassword.title}</h1>
                {!token && (
                  <EmailForm
                    onSubmit={this.handleEmailSubmit}
                    language={language}
                    loading={loading}
                  />
                )}
                {token && (
                  <PasswordForm
                    onSubmit={this.handlePasswordSubmit}
                    language={language}
                    loading={loading}
                  />
                )}
                <hr />
                <div className="has-text-centered">
                  <Link to="/signin">{lang.changePassword.signinLink}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePasswordForm;
