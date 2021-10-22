import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Home } from '../Home/Home';
import SideBar from '../../components/SideBar/SideBar';
import { Products } from '../../features/products/Products';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';

export const AuthenticatedHome = () => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <SideBar />
        <Layout.Content className='layout-content'>
          <Switch location={location} key={location.key}>
            <Route exact path='/products' component={Products} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout.Content>
      </Layout>
    </>
  );
};
