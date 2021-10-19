import React from 'react';
import { Layout } from 'antd';
import './SideBar.css';
import { About } from './About';
import { Profile } from './Profile';
import { Menu } from './Menu';

const SideBar = () => {
  return (
    <Layout.Sider
      className='sidebar'
      breakpoint={'lg'}
      theme='light'
      collapsedWidth={0}
      trigger={null}
      width={280}
    >
      <Profile />
      <About />
      <Menu />
    </Layout.Sider>
  );
};

export default SideBar;
