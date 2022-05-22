import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { useField } from 'formik';
import { makeStyles, withStyles, alpha } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: theme.spacing(2),
  inputLabel: {
    root: {
      '& .MuiInputLabel-shrink': {
        transform: 'translate(0px, -6px) scale(.9) !important',
      },
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: 'relative',
    fontSize: 16,
    width: '100%',
    padding: (props) => (props.startAdornment ? '10px 3px' : '10px 12px'),
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
}))(InputBase);

const TextInput = ({
  name,
  variant = 'outlined',
  endadornment = false,
  fullWidth = true,
  label,
  startadornment,
  startAdornmentIcon,
  endAdornmentIcon,
  type = 'text',
  HandleChange,
  ...props
}) => {
  const [field, meta] = useField(name);
  const classes = useStyles();

  return (
    <FormControl
      variant={variant}
      style={{
        width: fullWidth ? '100%' : '25ch',
      }}
      className={classes.formControl}
    >
      {label && (
        <InputLabel
          shrink
          htmlFor="input"
          error={meta.error && meta.touched}
          classes={{
            root: classes.inputLabel.root,
          }}
          // style={{ transform: 'translate(0px, -6px) scale(0.75}' }}
        >
          {label}
        </InputLabel>
      )}
      <>
        <BootstrapInput
          type={type}
          // value={values.weight}
          // onChange={handleChange('weight')}
          {...props}
          {...field}
          onChange={(e) => {
            if (HandleChange) {
              HandleChange(e);
            }
            field.onChange(e);
          }}
          error={!!meta.error}
          touched={meta.touched ? 'true' : ''}
          fullWidth={fullWidth}
          variant={variant}
          startAdornment={
            startadornment && (
              <InputAdornment position="start">
                {startAdornmentIcon}
              </InputAdornment>
            )
          }
          endAdornment={
            endadornment && (
              <InputAdornment position="end">{endAdornmentIcon}</InputAdornment>
            )
          }
          inputProps={{
            'aria-label': 'weight',
            'padding-left': startadornment ? '5px' : '10px',
          }}
        />
        {meta.error && meta.touched && (
          <FormHelperText
            id="outlined-weight-helper-text"
            style={{ color: '#CF352E' }}
          >
            {meta.error}
          </FormHelperText>
        )}
      </>
    </FormControl>
  );
};

export default TextInput;
