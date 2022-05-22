import { useField } from 'formik';
import React from 'react';
import SelectField from './Select';

const CustomSelect = ({ name, handleValueChange, options, ...props }) => {
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    console.log(e);
    if (handleValueChange) {
      handleValueChange(e.target.value);
    }
    field.onChange(e);
  };

  return (
    <SelectField
      name={field.name}
      onBlur={field.onBlur}
      value={field.value}
      onChange={handleChange}
      error={meta.error}
      touched={meta.rouched}
      options={options}
      {...props}
    />
  );
};

export default CustomSelect;
