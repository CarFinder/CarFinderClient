import classnames from 'classnames';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import Notification from '../../Common/Notification/Notifiation';
import './style.less';

export interface Props {
  input?: HTMLInputElement;
  name: string;
  title: string;
  type: string;
  meta?: any;
  custom?: object;
  handleSubmit: React.FormEventHandler<any>;
  invalid?: boolean;
  language: string;
  loading: boolean;
  successMessage?: string;
  authError?: any;
}

const renderTextField = ({ input, name, title, meta: { touched, error }, ...custom }: Props) => {
  return (
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
};

const renderTextArea = ({ input, name, title, meta: { touched, error }, ...custom }: Props) => (
  <div className="field">
    <label htmlFor="title" className="label">
      {title}
    </label>
    <div className="control has-icons-left">
      <textarea
        className={classnames('textarea', { 'is-danger': touched && !!error })}
        name={name}
        {...input}
        {...custom}
      />
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const Contact = (props: Props) => {
  const { language, loading, successMessage, authError } = props;
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  const errorMessage =
    language === 'ru'
      ? 'При отправке сообщения произошла ошибка'
      : 'Sorry, there was an error while sending the message';
  return (
    <section className="section section-contact">
      {authError && <Notification type="danger" text={errorMessage} />}
      {successMessage && <Notification type="success" text={successMessage} />}
      <div className="container">
        <p className="title section-title">{lang.home.contactUs}</p>
        <form className="section-form" onSubmit={props.handleSubmit}>
          <Field
            name="name"
            placeholder={lang.home.nameFieldPlaceholder}
            component={renderTextField}
            title={lang.home.nameField}
          />
          <Field
            name="email"
            placeholder={lang.home.emailFieldPlaceholder}
            component={renderTextField}
            title={lang.home.emailField}
          />
          <Field
            name="message"
            placeholder={lang.home.messagePlaceholder}
            component={renderTextArea}
            title={lang.home.message}
          />
          <button
            type="submit"
            className={classnames('button is-warning', {
              'is-loading': props.loading
            })}
          >
            {lang.home.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default reduxForm<any, any>({
  form: 'contactForm',
  validate
})(Contact);
