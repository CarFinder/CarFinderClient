import * as React from 'react';
import * as interfaces from '../../../interfaces';
import interfaceLang from '../../../utils/interfaceLanguage';

import './style.less';

export interface Props {
  handleChangeLanguage: (lang: string | null) => void;
  handleChangeUserSettings: (userSettings: interfaces.ChangeUserSettings) => void;
  subscription: boolean;
  interfaceLanguage: string;
}

export interface State {
  subscription: boolean;
  interfaceLanguage: string;
}

export default class UserSettings extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super();
    this.state = {
      subscription: props.subscription,
      interfaceLanguage: props.interfaceLanguage
    };
  }

  public handleChangeLanguage = (e: any) => {
    this.props.handleChangeLanguage(e.currentTarget.value);
    this.props.handleChangeUserSettings({
      subscription: this.state.subscription,
      interfaceLanguage: e.currentTarget.value
    });
    this.setState({ interfaceLanguage: e.currentTarget.value });
  };

  public handleСheckingSubscription = (e: any) => {
    this.props.handleChangeUserSettings({
      subscription: e.target.checked,
      interfaceLanguage: this.state.interfaceLanguage
    });
    this.setState({ subscription: e.target.checked });
  };

  public render() {
    const lang = this.props.interfaceLanguage === 'ru' ? interfaceLang.ru : interfaceLang.en;
    return (
      <div className="user-settings">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={this.state.subscription}
            onChange={this.handleСheckingSubscription}
          />
          {lang.userProfile.subscription}
        </label>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{lang.userProfile.interfaceLanguage}</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <span className="select">
                  <select value={this.state.interfaceLanguage} onChange={this.handleChangeLanguage}>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                  </select>
                </span>
                <span className="icon is-small is-left">
                  <i className="fa fa-globe" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
