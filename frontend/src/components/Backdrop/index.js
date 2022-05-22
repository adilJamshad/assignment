import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const BackDrop = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
      <Loader />
    </Backdrop>
  );
};

export default BackDrop;
