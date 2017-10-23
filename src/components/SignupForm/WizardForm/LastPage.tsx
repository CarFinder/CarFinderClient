import * as React from 'react';
import { reduxForm } from 'redux-form';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import '../style.less';

interface Props {
  language?: string;
}

const LastPage = (props: Props) => {
  const lang =
    props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <div className="has-text-centered">
      <h1 className="is-size-3">{lang.signupForm.signupConfirmation}</h1>
      <p>{lang.signupForm.signupConfirmationMessage}</p>
    </div>
  );
};

export default reduxForm<any, any>({
  form: 'signupForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(LastPage);
