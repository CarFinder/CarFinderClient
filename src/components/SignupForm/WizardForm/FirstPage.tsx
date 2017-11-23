import classnames from 'classnames';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';

export interface Props {
  input?: HTMLInputElement;
  name: string;
  title: string;
  meta?: any;
  custom?: object;
  handleSubmit: React.FormEventHandler<any>;
  language: string;
}

const data = localStorage.getItem('signupValues');

const renderTextField = ({ input, name, title, meta: { touched, error }, ...custom }: Props) => (
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
        <i className="fa fa-user-o" aria-hidden="true" />
      </div>
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const FirstPage = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="name"
          placeholder={lang.signupForm.nameFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.nameField}
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
  initialValues: data ? JSON.parse(data) : {},
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstPage);
