import classNames from 'classnames';
import * as React from 'react';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import './style.less';

export interface Props {
  language: string;
  type: string;
  isActive: boolean;
  handleConfirmAction: () => void;
  handleDeclineAction: () => void;
}

const Modal = (props: Props) => {
  const lang =
    props.language === 'ru'
      ? interfaceLanguage.ru.modal[props.type]
      : interfaceLanguage.en.modal[props.type];
  return (
    <div
      className={classNames('modal', {
        'is-active': props.isActive
      })}
    >
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{lang.title}</p>
          <button className="delete" aria-label="close" onClick={props.handleDeclineAction} />
        </header>
        <section className="modal-card-body">
          <div className="columns">
            <div className="column is-centered">
              <p>{lang.content}</p>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot is-aligned-right">
          <button className="button is-light" onClick={props.handleDeclineAction}>
            {lang.cancel}
          </button>
          <button className="button is-danger" onClick={props.handleConfirmAction}>
            {lang.confirm}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
