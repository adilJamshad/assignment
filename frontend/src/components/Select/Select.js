import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  alpha,
  Input,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  formControl: {
    borderRadius: 4,
    border: (props) =>
      `1px solid ${props.error && props.touched ? '#CF352E' : '#ced4da'}`,
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&.Mui-focused': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectField = ({
  name,
  label,
  onChange,
  options,
  placeholder,
  valueKey,
  error,
  touched,
  value,
  onBlur,
  ...props
}) => {
  const classes = useStyles({ error, touched });
  console.log(value);
  return (
    <FormControl style={{ m: 1, minWidth: 200 }} size="small">
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        variant="outlined"
        value={value}
        name={name}
        {...props}
        onChange={onChange}
        onBlur={onBlur}
        fullWidth
        displayEmpty
        MenuProps={MenuProps}
      >
        {placeholder && (
          <MenuItem key="" value="">
            {placeholder}
          </MenuItem>
        )}
        {options.map((item) => (
          <MenuItem key={item[valueKey]} value={item[valueKey]}>
            {item[valueKey]}
          </MenuItem>
        ))}
      </Select>
      {error && touched && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
