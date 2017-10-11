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
import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  custom?: object;
  handleSubmit: any;
  invalid?: boolean;
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
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="email"
          type="email"
          component={renderTextField}
          placeholder="Email"
          title="Email"
          className="form-field"
        />
      </div>
      <div className="form-control">
        <Field
          name="password"
          type="password"
          component={renderTextField}
          placeholder="Пароль"
          title="Пароль"
          className="form-field"
        />
        <Tooltip
          id="tooltip-pass"
          title="Пароль должен быть не менее 8 символов, содержать как минимум 1 цифру и 1 специальный символ"
          placement="top-start"
        >
          <HelpOutline className="hint" color="grey" />
        </Tooltip>
      </div>
      <div className="button">
        <Button dense color="primary" type="submit" className="next" disabled={props.invalid}>
          Войти <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SigninForm',
  validate
})(SigninForm);
