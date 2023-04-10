import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface IRequireAuthProps {
}

export default function RequireAuth ({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('access_token');
  console.log('token', token);
  const location = useLocation();
  if(!token) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
}
