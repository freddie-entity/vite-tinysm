import React, { useState } from 'react';
import { LoggedIn } from './LoggedIn';
import './NavBar.css';

import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from '../SideBar/Menu';
import { Guest } from './Guest';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className='navbar'>
      <div className='header'>
        {/* <Button
          className='menu-ant'
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <Drawer
          placement='left'
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <Menu />
        </Drawer> */}
        <a href='/'>
          <img src='/new_logo.png' className='logo' alt='logo' />
        </a>
        <div className='search'>
          <i className='ri-search-line'></i>
          <input type='text' placeholder='Search' />
        </div>
        <LoggedIn />
        {/* <Guest /> */}
      </div>
    </nav>
  );
};

export default NavBar;
