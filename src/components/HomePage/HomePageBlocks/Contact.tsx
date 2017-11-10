import * as React from 'react';
import { reduxForm } from 'redux-form';
import './style.less';

const Contact = (props: any) => {
  return (
    <section className="section section-contact">
      <div className="container">
        <p className="title section-title">Contact us</p>
      </div>
    </section>
  );
};

export default reduxForm<any, any>({
  form: 'contactForm'
})(Contact);
