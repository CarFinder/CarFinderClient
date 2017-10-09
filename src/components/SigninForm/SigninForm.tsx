import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import { validateSignin as validate } from '../../utils/signinValidation';
import './style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  custom?: object;
  handleSubmit: any;
  handleLogIn?: () => void;
  history?: any;
  invalid?: boolean;
  loading?: boolean;
  authError?: string;
}

const renderTextField = ({ title, input, meta: { touched, error }, ...custom }: Props) => (
  <div>
    <TextField
      name={name}
      label={title}
      className="form-input"
      helperText={touched && error}
      error={touched && !!error}
      {...input}
      {...custom}
    />
  </div>
);

const SigninForm = (props: Props) => {
  if (localStorage.getItem('jwt')) {
    props.history.push('/home');
  }
  return (
    <div className="signin-form">
      <Paper className="form-container">
        <form className="form-content" onSubmit={props.handleSubmit(props.handleLogIn)}>
          <h1>Вход</h1>
          <div>
            <Field
              name="email"
              type="email"
              component={renderTextField}
              placeholder="Email"
              title="Email"
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              component={renderTextField}
              placeholder="Пароль"
              title="Пароль"
            />
          </div>
          {props.authError && <span className="error">{props.authError}</span>}
          <div>
            {props.loading && <CircularProgress />}
            {!props.loading && (
              <Button className="form-button" type="submit" disabled={props.invalid} raised>
                Войти
              </Button>
            )}
          </div>
          <Divider />
          <div className="form-links">
            <Link to="/restore-password">Забыли пароль?</Link>
            <Link to="/signup">Зарегистрироваться</Link>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default reduxForm({
  form: 'SigninForm',
  validate
})(SigninForm);
