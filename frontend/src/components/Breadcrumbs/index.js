import React from 'react';
import {
  Box,
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname = '' },
  } = props;
  const pathnames = pathname.split('/').filter((x) => x);
  return (
    <Box>
      <Typography style={{ textTransform: 'capitalize' }} variant="h6">
        {pathnames.length > 0 &&
          pathnames[pathnames.length - 1].split('-').join(' ')}
      </Typography>
      <MUIBreadcrumbs aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Typography style={{ fontSize: '12px' }}> Home </Typography>
        ) : (
          <Typography style={{ fontSize: '12px' }}> Home </Typography>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography
              style={{ textTransform: 'capitalize', fontSize: '12px' }}
              key={name}
            >
              {name.split('-').join(' ')}
            </Typography>
          ) : (
            <Link
              key={name}
              onClick={() => history.push(routeTo)}
              style={{ textTransform: 'capitalize', fontSize: '12px' }}
            >
              {name.split('-').join(' ')}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default withRouter(Breadcrumbs);
