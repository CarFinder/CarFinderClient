import * as React from 'react';
import { reduxForm, Field, FormSubmitHandler } from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import HelpOutline from 'material-ui-icons/HelpOutline';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import { validateSignup as validate } from '../../../utils/signupValidation';
import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  handleSubmit?: React.FormEventHandler<any>;
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
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="password"
          placeholder="Придумайте пароль"
          component={renderTextField}
          title="Пароль"
          className="form-field"
        />
        <Tooltip
          id="tooltip-pass"
          title="Пароль должен быть не менее 8 символов, содержать как минимум 1 цифру 1 специальный символ"
          placement="top-start"
        >
          <HelpOutline className="hint" color="grey" />
        </Tooltip>
      </div>
      <div className="form-control">
        <Field
          name="passwordConfirmation"
          placeholder="Подтвердите пароль"
          component={renderTextField}
          title="Подтверждение пароля"
          className="form-field"
        />
      </div>
      <div className="button-group">
        <Button dense color="primary" type="button">
          <KeyboardArrowLeft /> Назад
        </Button>
        <Button raised color="primary" type="submit" className="next">
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdPage);
