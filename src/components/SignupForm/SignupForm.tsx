import * as React from 'react';
import { Link } from 'react-router-dom';
import * as interfaces from '../../interfaces';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Notification from '../Common/Notification/Notifiation';
import FirstPage from './WizardForm/FirstPage';
import FormStepper from './WizardForm/FormStepper';
import LastPage from './WizardForm/LastPage';
import SecondPage from './WizardForm/SecondPage';
import ThirdPage from './WizardForm/ThirdPage';

import './style.less';

export interface Props {
  handleClearError: () => void;
  handleSignup: (userData: interfaces.SignupUserData) => void;
  loading: boolean;
  signedup: boolean;
  authError?: any;
  language: string;
  formValues: any;
}

export interface State {
  page: number;
}

class SignupFrom extends React.PureComponent<Props, State> {
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
      this.setState(this.state);
    }
  }

  public componentWillMount() {
    this.props.handleClearError();
  }

  public handleSubmit = (userData: interfaces.SignupUserData) => {
    this.props.handleSignup(userData);
    localStorage.removeItem('signupValues');
  };

  public nextPage = () => {
    if (this.state.page !== 3) {
      localStorage.setItem('signupValues', JSON.stringify(this.props.formValues.values));
    }
    this.setState({ page: this.state.page + 1 });
  };

  public changePage = (index: number) => {
    if (this.state.page === 4 || (this.props.formValues.syncErrors && (this.state.page < index))) {
      return;
    } else {
      localStorage.setItem('signupValues', JSON.stringify(this.props.formValues.values));
      this.setState({ page: index });
    }
  };

  public render() {
    const { page } = this.state;
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
                {page !== 4 && (
                  <h1 className="is-size-3 has-text-centered">{lang.signupForm.title}</h1>
                )}
                <div className="form-stepper">
                  <FormStepper page={page} language={language} changePage={this.changePage} />
                </div>
                <div className="signup-form">
                  {page === 1 && <FirstPage onSubmit={this.nextPage} language={language} />}
                  {page === 2 && <SecondPage onSubmit={this.nextPage} language={language} />}
                  {page === 3 && (
                    <ThirdPage onSubmit={this.handleSubmit} language={language} loading={loading} />
                  )}
                  {page === 4 && <LastPage language={language} />}
                  <hr />
                  <div className="has-text-centered">
                    <Link to="/signin">{lang.signupForm.signinLink}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupFrom;
