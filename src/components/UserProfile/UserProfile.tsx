import * as React from 'react';
import interfaceLanguage from '../../utils/interfaceLanguage';

import Notification from '../Common/Notification/Notifiation';
import ChangeForm from './UserData/UserData';

import { UserData } from '../../containers/UserProfile';

import './style.less';

export interface Props {
  handleClearError: () => any;
  handleChangeUserData: (userData: UserData) => any;
  changeUserDataError?: any;
  initialValues: object;
  language: string;
  loading: boolean;
}
export interface State {}

export default class UserProfile extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  public componentDidMount() {
    this.props.handleClearError();
  }

  public handleSubmit = (userData: UserData) => {
    this.props.handleChangeUserData(userData);
  };

  public render() {
    const {
      changeUserDataError,
      initialValues,
      language,
      loading,
      handleChangeUserData
    } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    const errorMessage = !changeUserDataError.code
      ? lang.searchErrors.serverUnavailable
      : lang.authErrors[changeUserDataError.code.toString()];
    return (
      <div className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              {changeUserDataError && <Notification type="danger" text={errorMessage} />}
              <div className="box">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <figure className="image">
                      <img src="http://via.placeholder.com/200x200" />
                    </figure>
                  </div>
                  <div className="column">
                    <h1 className="is-size-3 has-text-centered">{lang.userProfile.title}</h1>
                    <ChangeForm
                      language={language}
                      loading={loading}
                      initialValues={initialValues}
                      onSubmit={this.handleSubmit}
                    />
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
