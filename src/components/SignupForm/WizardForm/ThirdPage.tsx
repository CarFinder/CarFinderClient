import classnames from 'classnames';
import * as React from 'react';
import { Field, FormSubmitHandler, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  handleSubmit: any;
  language?: string;
  loading?: boolean;
}

const renderTextField = ({
  input,
  name,
  title,
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

const ThirdPage = (props: Props) => {
  const lang =
    props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <p className="help has-text-grey-light">
        {lang.signupForm.passwordTooltip}
      </p>
      <div>
        <Field
          name="password"
          placeholder={lang.signupForm.passwordFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.passwordField}
        />
      </div>
      <div>
        <Field
          name="passwordConfirmation"
          placeholder={lang.signupForm.confirmPasswordFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.confirmPasswordField}
        />
      </div>
      <div className="button-group">
        <div className="is-clearfix">
          <button
            className={classnames('button is-warning is-pulled-right', {
              'is-loading': props.loading
            })}
          >
            {lang.signupForm.submitButton}
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdPage);
