import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import SideBar from '../../components/SideBar/SideBar';
import { Products } from '../../features/products/Products';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';

export const AuthenticatedHome = () => {
  return (
    <>
      <Layout>
        <SideBar />
        <Layout.Content className='layout-content'>
          <Switch>
            <Route exact path='/products' component={Products} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout.Content>
      </Layout>
    </>
  );
};
