import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.less';
import { Login } from './pages/Login/Login';
import { AuthenticatedHome } from './pages/AuthenticatedHome/AuthenticatedHome';
import NavBar from './components/NavBar/NavBar';
import { useAuth } from './components/PrivateRoute/useAuth';
import { useAppDispatch } from './app/hooks';
import { GetMe } from './features/user/userAction';
import cookie from 'js-cookie';

/////////////////FOR DEBUGGING
import {User} from "./pages/User/User"

/////////////////FOR DEBUGGING


function App() {
  const user = useAuth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetMe());
  }, [user.user.token.access_token]);
  return (
    <Router>
      <NavBar />
      {/* {cookie.get("token") ? <AuthenticatedHome /> : <Login />} */}
      <Switch>
        <Route path="/User">
          <User />
        </Route>
        </Switch>
      <AuthenticatedHome />
    </Router>
  );
}

export default App;
