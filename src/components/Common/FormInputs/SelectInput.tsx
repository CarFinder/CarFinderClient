import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import * as React from 'react';
import './style.less';

interface Props {
  onChange: (name: string) => any;
  onBlur?: () => any;
  field: string;
  label: string;
  value: any;
  disabled?: boolean;
  options: any[];
  error?: string;
}

const SelectInput = ({
  field,
  label,
  value,
  error,
  options,
  onChange,
  onBlur,
  disabled
}: Props) => (
  <FormControl className="form-field" error={!!error}>
    <InputLabel htmlFor={field}>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange(field)}
      onBlur={onBlur}
      disabled={disabled}
      input={<Input id={field} name={field} className="form-control" />}
    >
      {options &&
        options.map((option: any) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      {!options && <MenuItem value={'default'}>Please choose maker first</MenuItem>})}
    </Select>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default SelectInput;
