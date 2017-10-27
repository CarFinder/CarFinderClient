import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../../containers/Signin';
import { User } from '../../redux/models/userModel';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Notification from '../Common/Notification/Notifiation';
import Form from './WizardForm/SigninForm';

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

  public componentDidMount() {
    this.props.handleClearError();
  }

  public handleSubmit = (userData: UserData) => {
    this.props.handleLogIn(userData);
  };

  public render() {
    const { loading, authError, language } = this.props;
    const lang = this.props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    const errorMessage = !authError.code
      ? lang.searchErrors.serverUnavailable
      : lang.authErrors[authError.code.toString()];
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
