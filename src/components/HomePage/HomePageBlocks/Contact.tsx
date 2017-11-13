import classnames from 'classnames';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
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
}

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

const Contact = (props: any) => {
  return (
    <section className="section section-contact">
      <div className="container">
        <p className="title section-title">Contact us</p>
        <form className="section-form" onSubmit={props.handleSubmit}>
          <Field name="name" placeholder="Name" component={renderTextField} title="Your name" />
          <Field name="email" placeholder="Email" component={renderTextField} title="Your email" />
          <Field
            name="message"
            placeholder="Message"
            component={renderTextArea}
            title="Your message"
          />
          <button
            type="button"
            onClick={e => this.onSaveFilter(e)}
            className={classnames('button is-warning', {
              'is-loading': props.loading
            })}
          >
            Submit your message &nbsp;
          </button>
        </form>
      </div>
    </section>
  );
};

export default reduxForm<any, any>({
  form: 'contactForm'
})(Contact);
