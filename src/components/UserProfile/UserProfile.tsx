import * as React from 'react';
import interfaceLang from '../../utils/interfaceLanguage';

import Notification from '../Common/Notification/Notifiation';
import DropPhoto from './DropPhoto/DropPhoto';
import ChangeForm from './UserData/UserData';
import UserSettings from './UserSettings/UserSettings';

import { UserData } from '../../containers/UserProfile';

import './style.less';

export interface Props {
  handleClearError: () => any;
  handleChangeUserData: (userData: UserData) => any;
  handleChangeUserAvatar: (avatar: any) => any;
  handleChangeLanguage: (lang: string | null) => any;
  handleChangeUserSettings: (userSettings: UserData) => any;
  changeUserDataError?: any;
  initialValues: object;
  language: string;
  loading: boolean;
  successMessage: string;
  image: string;
  subscription: boolean;
}
export interface State {}

export default class UserProfile extends React.PureComponent<Props, State> {
  constructor() {
    super();
  }

  public componentDidMount() {
    this.props.handleClearError();
  }

  public handleSubmitData = (userData: UserData) => {
    this.props.handleChangeUserData(userData);
  };

  public handleSetAvatar = (avatar: any) => {
    this.props.handleChangeUserAvatar(avatar);
  };

  public handleChangeUserSettings = (userSettings: UserData) => {
    this.props.handleChangeUserSettings(userSettings);
  };

  public render() {
    const {
      changeUserDataError,
      initialValues,
      language,
      loading,
      handleChangeUserData,
      handleChangeLanguage,
      successMessage,
      image,
      subscription
    } = this.props;
    const lang = language === 'ru' ? interfaceLang.ru : interfaceLang.en;
    const errorMessage = !changeUserDataError.code
      ? lang.searchErrors.serverUnavailable
      : lang.authErrors[changeUserDataError.code.toString()];
    return (
      <div className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              {changeUserDataError && <Notification type="danger" text={errorMessage} />}
              {successMessage && <Notification type="success" text={successMessage} />}
              <div className="box">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <DropPhoto
                      interfaceLanguage={language}
                      image={image}
                      changeAvatar={this.handleSetAvatar}
                    />
                  </div>
                  <div className="column">
                    <h1 className="is-size-3 has-text-centered">{lang.userProfile.title}</h1>
                    <ChangeForm
                      language={language}
                      loading={loading}
                      initialValues={initialValues}
                      onSubmit={this.handleSubmitData}
                    />
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column is-half">
                    <UserSettings
                      handleChangeLanguage={handleChangeLanguage}
                      handleChangeUserSettings={this.handleChangeUserSettings}
                      subscription={subscription}
                      interfaceLanguage={language}
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
