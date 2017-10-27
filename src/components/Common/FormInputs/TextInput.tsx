import classnames from 'classnames';
import * as React from 'react';

import './style.less';

interface Props {
  onChange: (name: string) => any;
  field: string;
  label: string;
  placeholder?: string;
  value: any;
  type: string;
  error?: string;
}

const TextInput = ({ field, label, placeholder, value, type, error, onChange }: Props) => (
  <div className="field">
    <label htmlFor={field} className="label">
      {label}
    </label>
    <div className="control">
      <input
        className={classnames('input', { 'is-danger': !!error })}
        id={label}
        name={label}
        placeholder={placeholder}
        type={type}
        value={value === 0 ? '' : value}
        onChange={onChange(field)}
      />
    </div>
    {error && <p className="help is-danger">{error}</p>}
  </div>
);

export default TextInput;
