import Typography from 'material-ui/Typography';
import * as React from 'react';
import { reduxForm } from 'redux-form';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import '../style.less';

interface Props {
  language?: string;
}

const LastPage = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <div>
      <Typography type="display1" component="h3" className="form-title">
        {lang.signupForm.signupConfirmation}
      </Typography>
      <Typography type="body1" component="p">
        {lang.signupForm.signupConfirmationMessage}
      </Typography>
    </div>
  );
};

export default reduxForm<any, any>({
  form: 'signupForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(LastPage);
