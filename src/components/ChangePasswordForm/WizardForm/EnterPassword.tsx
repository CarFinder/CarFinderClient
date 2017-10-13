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
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="password"
          type="password"
          component={renderTextField}
          placeholder="Введите новый пароль"
          title="Введите новый пароль"
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
      <div className="form-control">
        <Field
          name="passwordConfirmation"
          type="password"
          component={renderTextField}
          placeholder="Подтвердите новый пароль"
          title="Подтвердите новый пароль"
          className="form-field"
        />
      </div>
      <div className="button">
        <Button dense color="primary" type="submit" className="next" disabled={props.invalid}>
          Изменить пароль <Send className="submit-icon" />
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'EnterPassword',
  validate
})(EnterPassword);
