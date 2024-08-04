import NotFound from '@/components/NotFound';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const Shipments = lazy(() => import('@/views/Shipments'));
const Login = lazy(() => import('@/views/Login'));

const AppLayout = lazy(() => import('@/components/AppLayout'));
const AuthLayout = lazy(() => import('@/components/AuthLayout'));

const routes: RouteObject[] = [
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="sign-in" /> },
      { path: 'sign-in', element: <Login /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="app" /> },
      {
        path: 'app',
        element: <Shipments />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
