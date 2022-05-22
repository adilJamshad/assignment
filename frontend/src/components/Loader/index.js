import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

const Loader = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;
