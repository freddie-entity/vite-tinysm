import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from './useAuth';
import {Login} from '../../pages/Login/Login';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
