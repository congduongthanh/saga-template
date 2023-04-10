import * as React from 'react';
import { Outlet } from 'react-router-dom';

export interface IAuthLayoutProps {
}

export function AuthLayout (props: IAuthLayoutProps) {
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
}
