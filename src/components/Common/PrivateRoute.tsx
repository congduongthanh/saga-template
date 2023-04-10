import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface IPrivateRouteProps { };

export function PrivateRoute(props: RouteProps) {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return <Navigate to='/login' />;
  }
  return (<Route {...props} />);
};

