import React, { useState } from 'react';
import { LoggedIn } from './LoggedIn';
import { SearchList } from './SearchList';
import { Menu_Mobile } from './Menu_Mobile';
import './NavBar.css';

import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from '../SideBar/Menu';
import { Guest } from './Guest';


const NavBar = () => {
  const [searchStr,setSearchStr] = useState("");
  const [visible, setVisible] = useState(false);

  const handleKeyDown = (event: { key: string; }) => {
    setVisible(true)
  }

  return (
    <nav className='navbar'>
      <div className='header'>
        <button className="btn-search-mobile">
          <i className="ri-search-line"></i>
        </button>
        <a href='/'>
          <img src='/new_logo.png' className='logo' alt='logo' />
        </a>
        <div className='search'>
          <i className='ri-search-line'></i>
          <input type='text' placeholder='Search' onChange={event => handleKeyDown} />
          {/* <SearchList /> */}
        </div>
        <LoggedIn />
        {/* <Guest /> */}
        <button className="btn-logout-mobile">
        <i className="ri-logout-box-r-line"></i>
      </button>
      </div>
      <Menu_Mobile />
    </nav>
  );
};

export default NavBar;
