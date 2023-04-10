import { AdminLayout } from "components/Layout";
import { AuthLayout } from "components/Layout/Auth";
import LoginPage from "features/authentication/pages/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: '/users',
        element: <div>UserPage</div>
      }
    ]
  }
]);