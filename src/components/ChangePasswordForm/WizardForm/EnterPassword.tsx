import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';
import HelpOutline from 'material-ui-icons/HelpOutline';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Send from 'material-ui-icons/Send';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import { validateChangePassword as validate } from '../../../utils/changePasswordValidation';
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

const EnterPassword = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="password"
          type="password"
          component={renderTextField}
          placeholder={lang.changePassword.passwordFieldPlaceholder}
          title={lang.changePassword.passwordField}
          className="form-field"
        />
        <Tooltip
          id="tooltip-pass"
          title={lang.changePassword.passwordTooltip}
          placement="top-start"
        >
          <HelpOutline className="hint" color="grey" />
        </Tooltip>
      </div>
      <div className="form-control">
        <Field
          name="passwordConfirmation"
          type="password"
          component={renderTextField}
          placeholder={lang.changePassword.confirmPasswordFieldPlaceholder}
          title={lang.changePassword.confirmPasswordField}
          className="form-field"
        />
      </div>
      <div className="button">
        <Button dense color="primary" type="submit" className="next" disabled={props.invalid}>
          {lang.changePassword.submitPassword} <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'EnterPassword',
  validate
})(EnterPassword);
