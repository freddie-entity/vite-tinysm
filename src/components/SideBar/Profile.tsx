import React from 'react';
import './SideBar.css';

export const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src='/profile.jpg' alt='' />
      </div>
      <div className='name'>
        <h1>Dua Lipa</h1>
        <img src='/verify.png' alt='' />
      </div>
      <span>@lipa</span>
    </div>
  );
};
