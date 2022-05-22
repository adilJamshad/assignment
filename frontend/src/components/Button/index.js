import Button from '@material-ui/core/Button';

import React from 'react';

const CustomButton = ({ title, variant = 'text', ...props }) => (
  <Button variant={variant} color="primary" fullWidth {...props}>
    {title}
  </Button>
);

export default CustomButton;
