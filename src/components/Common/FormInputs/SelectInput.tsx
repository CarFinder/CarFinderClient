import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import * as React from 'react';
import './style.less';

interface Props {
  onChange: (name: string) => any;
  field: string;
  label: string;
  value: any;
  options: string[];
  error?: string;
}

const SelectInput = ({ field, label, value, error, options, onChange }: Props) => (
  <FormControl className="form-field" error={!!error}>
    <InputLabel htmlFor={field}>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange(field)}
      input={<Input id={field} name={field} className="form-control" />}
    >
      {options.map((option: string) => {
        return (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        );
      })}
    </Select>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default SelectInput;
