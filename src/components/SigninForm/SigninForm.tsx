import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { required, email, password } from '../../utils/validation';
import './style.less';

export interface Props {
  email?: string;
  input?: HTMLInputElement;
  name?: string;
  type?: string;
  meta?: any;
  id?: string;
  handleSubmit: any;
  handleLogIn?: () => void;
}

const renderTextField = ({ input, type, meta: { touched, error }, ...custom }: Props) => (
  <div>
    <TextField className="form-input" {...input} {...custom} />
    {touched && (error && <span className="error">{error}</span>)}
  </div>
);

class SigninForm extends React.Component<Props, object> {
  render() {
    return (
      <div className="signin-form">
        <Paper className="form-container">
          <form className="form-content" onSubmit={this.props.handleSubmit(this.props.handleLogIn)}>
            <h1>Вход</h1>
            <div>
              <Field
                name="email"
                component={renderTextField}
                placeholder="Email"
                validate={[required, email]}
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                component={renderTextField}
                placeholder="Пароль"
                validate={[required, password]}
              />
            </div>
            <div>
              <Button className="form-button" type="submit" raised>
                Войти
              </Button>
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
  if (localStorage.getItem('jwt')) {
    props.history.push('/home');
  }
}

export default reduxForm<Props, any>({
  form: 'SigninForm'
})(SigninForm);
