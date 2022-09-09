import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLoader } from '../components';
import { routes } from './routes';

const Routing = () => (
  <Router>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map((route) => (
          <Route exact key={route.path || '404'} path={route.path} element={<route.page />} />
        ))}
      </Routes>
    </Suspense>
  </Router>
);
export default Routing;
