import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'features/authentication/pages/Login';
// import { NotFound } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { AuthLayout } from 'components/Layout/Auth';
import { NotFound } from 'components/Common';
import RequireAuth from 'components/Common/RequireAuth';

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<div>RegisterPage</div>} />
        <Route path='/forgot-password' element={<div>ForgotPasswordPage</div>} />
      </Route>
      <Route element={<RequireAuth><AdminLayout /></RequireAuth>}>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/users' element={<div>UserPage</div>} />
        <Route path='/tasks' element={<div>TaskPage</div>} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
