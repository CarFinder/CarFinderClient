import classnames from 'classnames';
import * as React from 'react';
import './style.less';

interface Props {
  onChange: (name: string) => any;
  field: string;
  label: string;
  value: any;
  type: string;
  icon: string;
  error?: string;
}

const TextInput = ({
  field,
  label,
  value,
  type,
  error,
  icon,
  onChange
}: Props) => (
  <div className="field">
    <label htmlFor={field} className="label">
      {label}
    </label>
    <div className="control has-icons-left">
      <input
        className={classnames('input', { 'is-danger': !!error })}
        id={label}
        name={label}
        type={type}
        onChange={onChange(field)}
      />
      <div className="icon is-small is-left">
        <i className={classnames('fa', { icon: !!icon })} aria-hidden="true" />
      </div>
    </div>
    {error && <p className="help is-danger">{error}</p>}
  </div>
);

export default TextInput;
