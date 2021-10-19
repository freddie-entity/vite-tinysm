import React from 'react';
import { LoginForm } from '../../components/LoginForm';

export const Login = () => {
  setTimeout(() => {}, 3000);
  return (
    <div className='centered'>
      <LoginForm />
    </div>
  );
};
