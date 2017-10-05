import * as React from 'react';
import { reduxForm, Field, FormSubmitHandler } from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
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
    type="email"
    label={title}
    helperText={touched && error}
    error={touched && !!error}
    {...input}
    {...custom}
  />
);

const SecondPage = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <Field
          name="email"
          placeholder="Введите ваш е-мэйл"
          component={renderTextField}
          title="Ваш е-мэйл"
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
})(SecondPage);
