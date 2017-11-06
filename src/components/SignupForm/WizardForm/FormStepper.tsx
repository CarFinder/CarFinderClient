import classnames from 'classnames';
import * as React from 'react';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import '../steps.sass';
import '../style.less';

export interface Props {
  page: number;
  language: string;
}

const FormStepper = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <ul className="steps is-narrow is-medium is-centered has-content-centered">
      <li
        className={classnames('steps-segment', {
          'is-active': props.page === 1
        })}
      >
        <a className="has-text-dark">
          <span className="steps-marker">
            <span className="icon">
              <i className="fa fa-user" />
            </span>
          </span>
          <div className="steps-content">
            <p className="heading">{lang.signupForm.firstStepTooltip}</p>
          </div>
        </a>
      </li>
      <li
        className={classnames('steps-segment', {
          'is-active': props.page === 2
        })}
      >
        <a className="has-text-dark">
          <span className="steps-marker">
            <span className="icon">
              <i className="fa fa-envelope-open" />
            </span>
          </span>
          <div className="steps-content">
            <p className="heading">{lang.signupForm.secondStepTooltip}</p>
          </div>
        </a>
      </li>
      <li
        className={classnames('steps-segment', {
          'is-active': props.page === 3
        })}
      >
        <a className="has-text-dark">
          <span className="steps-marker">
            <span className="icon">
              <i className="fa fa-shield" />
            </span>
          </span>
          <div className="steps-content">
            <p className="heading">{lang.signupForm.thirdStepTooltip}</p>
          </div>
        </a>
      </li>
      <li
        className={classnames('steps-segment', {
          'is-active': props.page === 4
        })}
      >
        <a className="has-text-dark">
          <span className="steps-marker">
            <span className="icon">
              <i className="fa fa-check" />
            </span>
          </span>
          <div className="steps-content">
            <p className="heading">{lang.signupForm.fourthStepTooltip}</p>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default FormStepper;
