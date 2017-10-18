import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import * as React from 'react';
import './style.less';

interface Props {
  onChange: (name: string) => any;
  field: string;
  label: string;
  value: any;
  type: string;
  error?: string;
}

const TextInput = ({ field, label, value, type, error, onChange }: Props) => (
  <FormControl className="form-field" error={!!error}>
    <InputLabel htmlFor={field}>{label}</InputLabel>
    <Input
      id={field}
      name={field}
      type={type}
      className="form-control"
      onChange={onChange(field)}
    />
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default TextInput;
