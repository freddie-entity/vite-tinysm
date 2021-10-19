import React from 'react';
import './NavBar.css';

export const Guest = () => {
  return (
    <div className='header-content'>
      <a href='#' className='btn'>
        <i className='ri-add-circle-fill'></i>
        <div className='btn-text'>Login</div>
      </a>
      <a href='#' className='btn'>
        <i className='ri-add-circle-fill'></i>
        <div className='btn-text'>Sign Up</div>
      </a>
    </div>
  );
};
