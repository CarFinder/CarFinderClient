import HelpOutline from 'material-ui-icons/HelpOutline';
import Send from 'material-ui-icons/Send';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';
import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validateSignin as validate } from '../../../utils/signinValidation';
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
}

const renderTextField = ({ title, input, meta: { touched, error }, ...custom }: Props) => (
  <TextField
    name={name}
    label={title}
    className="form-input"
    helperText={touched && error}
    error={touched && !!error}
    {...input}
    {...custom}
  />
);

const SigninForm = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="email"
          type="email"
          component={renderTextField}
          placeholder={lang.signinForm.emailFieldPlaceholder}
          title={lang.signinForm.emailField}
          className="form-field"
        />
      </div>
      <div className="form-control">
        <Field
          name="password"
          type="password"
          component={renderTextField}
          placeholder={lang.signinForm.passwordFieldPlaceholder}
          title={lang.signinForm.passwordField}
          className="form-field"
        />
        <Tooltip id="tooltip-pass" title={lang.signinForm.passwordTooltip} placement="top-start">
          <HelpOutline className="hint" color="grey" />
        </Tooltip>
      </div>
      <div className="button">
        <Button dense color="primary" type="submit" className="next" disabled={props.invalid}>
          {lang.signinForm.submitButton} <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'SigninForm',
  validate
})(SigninForm);
