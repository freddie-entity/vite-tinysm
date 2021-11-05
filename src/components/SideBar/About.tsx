import React from 'react';
import './SideBar.css';

export const About = () => {
  return (
    <div className='about'>
      <div className='box'>
        <h3>54</h3>
        <span>Posts</span>
      </div>
      <div className='box'>
        <h3>14.4k</h3>
        <span>Followers</span>
      </div>
      <div className='box'>
        <h3>14</h3>
        <span>Following</span>
      </div>
    </div>
  );
};
