import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
import { Login } from './pages/Login/Login';
import { AuthenticatedHome } from './pages/AuthenticatedHome/AuthenticatedHome';
import { useAuth } from './components/PrivateRoute/useAuth';
import { useAppDispatch } from './app/hooks';
import { GetMe } from './features/user/userAction';
import cookie from 'js-cookie';

function App() {
  const user = useAuth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetMe());
  }, [user.user.token.access_token]);
  return (
    <Router>
      {/* <NavBar /> */}
      {cookie.get('token') ? <AuthenticatedHome /> : <Login />}
      {/* <Home /> */}
      {/* <Chat /> */}
    </Router>
  );
}

export default App;
