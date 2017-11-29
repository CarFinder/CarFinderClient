import * as React from 'react';
import { Link } from 'react-router-dom';
import * as interfaces from '../../interfaces';
import { User } from '../../redux/models/userModel';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Notification from '../Common/Notification/Notifiation';
import Form from './WizardForm/SigninForm';

import './style.less';

export interface Props {
  handleClearError: () => void;
  handleLogIn: (userData: interfaces.SigninUserData) => void;
  loading: boolean;
  authError?: any;
  history: {
    push: (url: string) => void;
  };
  user: User;
  language: string;
}

class SigninFrom extends React.PureComponent<Props, {}> {
  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.user.email) {
      this.props.history.push('/home');
    }
  }

  public componentDidMount() {
    this.props.handleClearError();
  }

  public handleSubmit = (userData: interfaces.SigninUserData) => {
    this.props.handleLogIn(userData);
  };

  public render() {
    const { loading, authError, language } = this.props;
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
              <div className="box">
                <h1 className="is-size-3 has-text-centered">{lang.signinForm.title}</h1>
                <Form onSubmit={this.handleSubmit} language={language} loading={loading} />
                <hr />
                <div className="form-links has-text-centered">
                  <Link to="/restore">{lang.signinForm.changePassword}</Link>
                  <Link to="/signup">{lang.signinForm.signupLink}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninFrom;
