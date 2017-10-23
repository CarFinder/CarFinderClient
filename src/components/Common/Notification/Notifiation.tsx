import classnames from 'classnames';
import * as React from 'react';

interface Props {
  text: string;
  type: string;
}

const Notification = ({ text, type }: Props) => (
  <div
    className={classnames(
      'notification',
      { 'is-danger': type === 'danger' },
      { 'is-warning': type === 'warning' },
      { 'is-info': type === 'info' },
      { 'is-success': type === 'success' },
      { 'is-default': type === 'default' }
    )}
  >
    {text}
  </div>
);

export default Notification;
