import classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';

import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name: string;
  title: string;
  meta?: any;
  custom?: object;
  handleSubmit: React.FormEventHandler<any>;
  language: string;
  loading: boolean;
}

const renderTextField = ({ title, input, meta: { touched, error }, ...custom }: Props) => (
  <div className="field">
    <label htmlFor="title" className="label">
      {title}
    </label>
    <div className="control has-icons-left">
      <input
        className={classnames('input', { 'is-danger': touched && !!error })}
        name={name}
        type="password"
        {...input}
        {...custom}
      />
      <div className="icon is-small is-left">
        <i className="fa fa-lock" aria-hidden="true" />
      </div>
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const EnterPassword = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <p className="help has-text-grey-light">{lang.changePassword.passwordTooltip}</p>
      <div>
        <Field
          name="password"
          type="password"
          component={renderTextField}
          placeholder={lang.changePassword.passwordFieldPlaceholder}
          title={lang.changePassword.passwordField}
        />
      </div>
      <div>
        <Field
          name="passwordConfirmation"
          type="password"
          component={renderTextField}
          placeholder={lang.changePassword.confirmPasswordFieldPlaceholder}
          title={lang.changePassword.confirmPasswordField}
        />
      </div>
      <div className="is-clearfix">
        <button
          className={classnames('button is-warning is-pulled-right', {
            'is-loading': props.loading
          })}
        >
          {lang.changePassword.submitPassword} &nbsp;
          <i className="fa fa-paper-plane-o" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'EnterPassword',
  validate
})(EnterPassword);
