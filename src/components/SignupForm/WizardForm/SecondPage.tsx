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
  handleSubmit?: React.FormEventHandler<any>;
  language?: string;
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
    <div className="control has-icons-left">
      <input
        className={classnames('input', { 'is-danger': touched && !!error })}
        name={name}
        type="text"
        {...input}
        {...custom}
      />
      <div className="icon is-small is-left">
        <i className="fa fa-envelope-o" aria-hidden="true" />
      </div>
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const SecondPage = (props: Props) => {
  const lang =
    props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          placeholder={lang.signupForm.emailFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.emailField}
        />
      </div>
      <div className="is-clearfix">
        <button className="button is-warning is-pulled-right">
          {lang.signupForm.nextButton} &nbsp;
          <i className="fa fa-angle-right" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondPage);
