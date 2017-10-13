import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
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
  handleSubmit?: React.FormEventHandler<any>;
  language?: string;
}

const renderTextField = ({ input, name, title, meta: { touched, error }, ...custom }: Props) => (
  <TextField
    name={name}
    type="email"
    label={title}
    helperText={touched && error}
    error={touched && !!error}
    {...input}
    {...custom}
  />
);

const SecondPage = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="email"
          placeholder={lang.signupForm.emailFieldPlaceholder}
          component={renderTextField}
          title={lang.signupForm.emailField}
          className="form-field"
        />
      </div>
      <div className="button-group">
        <Button dense color="primary" type="submit" className="next">
          {lang.signupForm.nextButton} <KeyboardArrowRight />
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
})(SecondPage);
