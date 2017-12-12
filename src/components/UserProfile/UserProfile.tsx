import * as React from 'react';
import interfaceLang from '../../utils/interfaceLanguage';

import Notification from '../Common/Notification/Notifiation';
import DropPhoto from './DropPhoto/DropPhoto';
import ChangeForm from './UserData/UserData';
import UserSettings from './UserSettings/UserSettings';

import * as interfaces from '../../interfaces';

import './style.less';

export interface Props {
  handleClearError: () => void;
  handleChangeUserData: (userData: interfaces.ChangeUserSettings) => void;
  handleChangeUserAvatar: (avatar: any) => void;
  handleChangeLanguage: (lang: string | null) => void;
  handleChangeUserSettings: (userSettings: interfaces.ChangeUserSettings) => void;
  changeUserDataError: any;
  initialValues: {
    name: string;
    email: string;
  };
  language: string;
  loading: boolean;
  successMessage: string;
  image: string;
  subscription: boolean;
}

export default class UserProfile extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    this.props.handleClearError();
  }

  public handleSubmitData = (userData: interfaces.ChangeUserSettings) => {
    this.props.handleClearError();
    this.props.handleChangeUserData(userData);
  };

  public handleSetAvatar = (avatar: File) => {
    this.props.handleClearError();
    this.props.handleChangeUserAvatar(avatar);
  };

  public handleChangeUserSettings = (userSettings: interfaces.ChangeUserSettings) => {
    this.props.handleClearError();
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
    const errorMessage = changeUserDataError.code
      ? lang.errors[changeUserDataError.code.toString()]
      : lang.errors.serverUnavailable;
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
