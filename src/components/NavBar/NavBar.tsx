import { Modal, Dropdown } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Notification } from '../Notification/Notification';
import { useAuth } from '../PrivateRoute/useAuth';
import { SearchResult } from '../SearchResult/SearchResult';
import { Upload } from '../Upload/Upload';
import './NavBar.css';

export const NavBar = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  const [dropDownvisible, setDropDownVisible] = useState(false);
  const [searchvisible, setSearchVisible] = useState(false);
  return (
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <div className='nav-items'>
          <Link to='/' className='icon'>
            <i className='ri-instagram-line'></i>
          </Link>
        </div>
        <Dropdown
          placement='bottomCenter'
          overlay={<SearchResult />}
          onVisibleChange={() => setSearchVisible(!searchvisible)}
          visible={searchvisible}
        >
          <input type='text' className='search-box' placeholder='Search' />
        </Dropdown>

        <div className='nav-items'>
          <Link to='/' className='icon'>
            <i className='ri-home-3-line'></i>
          </Link>

          <Link to={`/inbox/${user.user.username}`} className='icon-message'>
            <span className='noti'>5</span>
            <i className='ri-chat-1-line'></i>
          </Link>
          <div className='icon' onClick={() => setVisible(true)}>
            <i className='ri-camera-3-fill'></i>
          </div>
          <Modal
            centered
            visible={visible}
            closeIcon={<i className='ri-close-line'></i>}
            width={'clamp(80%, 60vh, 1000px)'}
            footer={null}
            onCancel={() => setVisible(false)}
          >
            <Upload />
          </Modal>
          <Link to={`/discover/${user.user.username}`} className='icon'>
            <i className='ri-compass-discover-line'></i>
          </Link>
          <Dropdown
            placement='bottomRight'
            overlay={<Notification />}
            onVisibleChange={() => setDropDownVisible(!dropDownvisible)}
            visible={dropDownvisible}
          >
            <div className='icon-history'>
              <span className='noti'>1</span>
              <i className='ri-heart-3-line'></i>
            </div>
          </Dropdown>

          <Link to={`/${user.user.username}`}>
            <img
              className='user-profile'
              src={'https://source.unsplash.com/random/'}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
