import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.less';
import { AnimatePresence } from 'framer-motion';
import { AuthenticatedHome } from './pages/AuthenticatedHome/AuthenticatedHome';
import NavBar from './components/NavBar/NavBar';
import { useAuth } from './components/PrivateRoute/useAuth';
import { useAppDispatch } from './app/hooks';
import { GetMe } from './features/user/userAction';
import cookie from 'js-cookie';
import { GetUserPosts } from './features/post/postAction';
import { Test } from './pages/Test/Test';

/////////////////FOR DEBUGGING
import {User} from "./pages/User/User"
import {DirectMessage} from "./pages/DirectMessage/DirectMessage"


/////////////////FOR DEBUGGING


function App() {
  // const user = useAuth();
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(GetMe());
  //   dispatch(GetUserPosts(user.user.user.username));
  // }, [user.user.token.access_token]);
  return (
    <Router>
      <NavBar />
      {/* {cookie.get("token") ? <AuthenticatedHome /> : <Login />} */}
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/direct_message">
          <DirectMessage />
        </Route>
      </Switch>
      <AuthenticatedHome />

      {/* {cookie.get('token') ? <AuthenticatedHome /> : <Login />} */}
      {/* <AnimatePresence exitBeforeEnter>
        <AuthenticatedHome />
      </AnimatePresence> */}
      {/* <Test /> */}
    </Router>
  );
}

export default App;
