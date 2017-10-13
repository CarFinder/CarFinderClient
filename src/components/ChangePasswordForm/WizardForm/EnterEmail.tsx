import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';
import HelpOutline from 'material-ui-icons/HelpOutline';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Send from 'material-ui-icons/Send';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import { validateSignin as validate } from '../../../utils/signinValidation';
import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  custom?: object;
  handleSubmit: any;
  history?: any;
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

const EnterEmail = (props: Props) => {
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
      <div className="button">
        <Button dense color="primary" type="submit" className="next" disabled={props.invalid}>
          Отправить <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SigninForm',
  validate
})(EnterEmail);
