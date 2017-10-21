import classnames from 'classnames';
import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';

import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  custom?: object;
  handleSubmit: any;
  invalid?: boolean;
  language: string;
  loading: boolean;
}

const renderTextField = ({
  title,
  input,
  meta: { touched, error },
  ...custom
}: Props) => (
  <div className="field">
    <label htmlFor="title" className="label">
      {title}
    </label>
    <div className="control">
      <input
        className={classnames('input', { 'is-danger': touched && !!error })}
        name={name}
        type="text"
        {...input}
        {...custom}
      />
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const SigninForm = (props: Props) => {
  const lang =
    props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <p className="help has-text-grey-light">
        {lang.signupForm.passwordTooltip}
      </p>
      <div>
        <Field
          name="email"
          type="email"
          component={renderTextField}
          placeholder={lang.signinForm.emailFieldPlaceholder}
          title={lang.signinForm.emailField}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          component={renderTextField}
          placeholder={lang.signinForm.passwordFieldPlaceholder}
          title={lang.signinForm.passwordField}
        />
      </div>
      <div className="is-clearfix">
        <button
          className={classnames('button is-warning is-pulled-right', {
            'is-loading': props.loading
          })}
        >
          {lang.signupForm.submitButton} &nbsp;
          <i className="fa fa-paper-plane-o" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'SigninForm',
  validate
})(SigninForm);
