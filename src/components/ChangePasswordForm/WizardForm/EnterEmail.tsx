import HelpOutline from 'material-ui-icons/HelpOutline';
import Send from 'material-ui-icons/Send';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';
import * as React from 'react';
import { Link } from 'react-router-dom';
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
  history?: any;
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

const EnterEmail = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="email"
          type="email"
          component={renderTextField}
          placeholder={lang.changePassword.emailFieldPlaceholder}
          title={lang.changePassword.emailField}
          className="form-field"
        />
      </div>
      <div className="button">
        <Button dense color="primary" type="submit" className="next" disabled={props.invalid}>
          {lang.changePassword.submitEmail} <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'EnterEmail',
  validate
})(EnterEmail);
