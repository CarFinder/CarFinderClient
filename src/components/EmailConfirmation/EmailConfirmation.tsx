import queryString from 'query-string';
import * as React from 'react';
import interfaceLanguage from '../../utils/interfaceLanguage';
import Notification from '../Common/Notification/Notifiation';

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
  handleEmailConfirmation: (token: string) => void;
}

export interface State {
  loading: boolean;
  hasError: boolean;
}

class EmailConfirmation extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
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
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-centered">
              {loading && (
                <Notification type="default" text={lang.emailConfirmation.loadingMessage} />
              )}
              {!loading &&
                !hasError && (
                  <Notification type="success" text={lang.emailConfirmation.successMessage} />
                )}
              {!loading &&
                hasError && (
                  <Notification type="danger" text={lang.emailConfirmation.errorMessage} />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailConfirmation;
