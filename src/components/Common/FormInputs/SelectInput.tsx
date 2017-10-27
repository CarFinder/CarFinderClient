import classnames from 'classnames';
import * as React from 'react';
import Select from 'react-select';
import interfaceLanguage from '../../../utils/interfaceLanguage';

import './style.less';

interface Props {
  onChange: (value: any, field: string) => void;
  onBlur?: () => void;
  field: string;
  label: string;
  value: any;
  disabled?: boolean;
  options: any[];
  error?: string;
  multiple?: boolean;
  language?: string;
}

const SelectInput = ({
  field,
  label,
  value,
  error,
  options,
  onChange,
  onBlur,
  disabled,
  multiple,
  language
}: Props) => {
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <div className="field">
      <label htmlFor={field} className="label">
        {label}
      </label>
      <div className="control">
        <Select
          multi={multiple}
          name={field}
          value={value}
          options={options}
          onChange={(val: any) => onChange(val, field)}
          onBlur={onBlur}
        />
      </div>
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );
};
export default SelectInput;
