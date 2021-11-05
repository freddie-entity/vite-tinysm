import React from 'react';
import './NavBar.css';

export const LoggedIn = () => {
  return (
    <div className='header-content'>
      <i className='ri-notification-4-fill'></i>
      <i className='ri-mail-unread-fill'></i>
      <a href='#' className='btn'>
        <i className='ri-add-circle-fill'></i>
        <div className='btn-text'>Add Photo</div>
      </a>
    </div>
  );
};
