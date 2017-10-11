import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateSignup as validate } from '../../../utils/signupValidation';
import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name?: string;
  title?: string;
  meta?: any;
  custom?: object;
  handleSubmit?: React.FormEventHandler<any>;
}

const renderTextField = ({ input, name, title, meta: { touched, error }, ...custom }: Props) => (
  <TextField
    name={name}
    type="text"
    label={title}
    helperText={touched && error}
    error={touched && !!error}
    {...input}
    {...custom}
  />
);

const FirstPage = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="name"
          placeholder="Введите ваше имя"
          component={renderTextField}
          title="Ваше имя"
          className="form-field"
        />
      </div>
      <div className="button-group">
        <Button dense color="primary" type="submit" className="next">
          Далее <KeyboardArrowRight />
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
})(FirstPage);
