import classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  custom?: object;
  type?: string;
  language: string;
  handleSubmit: React.FormEventHandler<any>;
  loading?: boolean;
}

export const renderTextField = ({
  input,
  name,
  title,
  type,
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
        <i className={type === 'name' ? 'fa fa-user-o' : 'fa fa-envelope-o'} aria-hidden="true" />
      </div>
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const UserData = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="name"
          type="name"
          placeholder={lang.userProfile.nameFieldPlaceholder}
          component={renderTextField}
          title={lang.userProfile.nameField}
        />
      </div>
      <div>
        <Field
          name="email"
          type="email"
          placeholder={lang.userProfile.emailFieldPlaceholder}
          component={renderTextField}
          title={lang.userProfile.emailFieldPlaceholder}
        />
      </div>
      <div className="is-clearfix">
        <Link to="/restore">{lang.userProfile.changePassword}</Link>
        <button
          className={classnames('button is-warning is-pulled-right', {
            'is-loading': props.loading
          })}
        >
          {lang.userProfile.submitButton} &nbsp;
          <i className="fa fa-floppy-o" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'UserProfileData',
  validate
})(UserData);
