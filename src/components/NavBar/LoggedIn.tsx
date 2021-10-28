import React from 'react';
import './NavBar.css';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';


export const LoggedIn = () => {
  return (
    <motion.div
      className='header-content'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <a href="/" className="btn"><i className="ri-home-line"></i></a>
      {/* onClick => openNotify dropdown */}
      <motion.i
        className='ri-notification-line'
        variants={iconVariants}
      ></motion.i>
      {/* onClick => /direct_message */}
      <motion.i className='ri-send-plane-line'></motion.i> 
      <a href='#' className='btn'>
        <div className='btn-text'><i className="ri-add-box-line"></i></div>
      </a>
      <div className="user-avatar btn">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button className="avatar-container">
              <img src="/profile.jpg" alt="Your fucking avatar"/>
            </Button>
          </Dropdown>
      </div>
    </motion.div>
  );
};

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/user">
      <i className="ri-user-line"></i>&nbsp;&nbsp; My profile
      </a>
    </Menu.Item>
    <hr/>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
      <i className="ri-logout-box-r-line"></i>&nbsp;&nbsp; Log out
      </a>
    </Menu.Item>
  </Menu>
);


const containerVariants = {
  hidden: {},
  visible: {},
};

const iconVariants = {
  hidden: {},
  visible: {},
};
