import { lazy } from 'react';
import { paths } from './paths';

export const routes = [
  {
    path: paths.HOME,
    page: lazy(() => import('../pages/Home/Home.page')),
  },
];
