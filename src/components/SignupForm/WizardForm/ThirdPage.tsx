import HelpOutline from 'material-ui-icons/HelpOutline';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Send from 'material-ui-icons/Send';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';
import * as React from 'react';
import { Field, FormSubmitHandler, reduxForm } from 'redux-form';
import { validateSignup as validate } from '../../../utils/signupValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  pristine: boolean;
  submitting: boolean;
  handleSubmit: any;
  language?: string;
}

const renderTextField = ({ input, name, title, meta: { touched, error }, ...custom }: Props) => (
  <TextField
    name={name}
    type="password"
    label={title}
    helperText={touched && error}
    error={touched && !!error}
    {...input}
    {...custom}
  />
);

const ThirdPage = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="password"
          placeholder={lang.signupForm.passwordFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.passwordField}
          className="form-field"
        />
        <Tooltip id="tooltip-pass" title={lang.signupForm.passwordTooltip} placement="top-start">
          <HelpOutline className="hint" color="grey" />
        </Tooltip>
      </div>
      <div className="form-control">
        <Field
          name="passwordConfirmation"
          placeholder={lang.signupForm.confirmPasswordFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.confirmPasswordField}
          className="form-field"
        />
      </div>
      <div className="button-group">
        <Button
          dense
          color="primary"
          disabled={props.pristine || props.submitting}
          type="submit"
          className="next"
        >
          {lang.signupForm.submitButton} <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdPage);
