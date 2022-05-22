import React, { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={<Loader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
