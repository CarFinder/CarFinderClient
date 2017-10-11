import Typography from 'material-ui/Typography';
import * as React from 'react';
import { reduxForm } from 'redux-form';
import '../style.less';

const LastPage = () => {
  return (
    <div>
      <Typography type="display1" component="h3" className="form-title">
        Подтверждение регистрации
      </Typography>
      <Typography type="body1" component="p">
        Мы отправили на почтовый ящик письмо с ссылой активации. Пожалуйста, пройдите по ней для
        того, чтобы закончить регистрацию.
      </Typography>
    </div>
  );
};

export default reduxForm({
  form: 'signupForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(LastPage);
