import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectUserProfile } from '../../../features/user/userSelector';
import './Info.css';

export const Info = () => {
  const user = useAppSelector(selectUserProfile);
  return (
    <div className='profile'>
      <div className='profile-image'>
        <img src={'http://localhost:8000' + user.profile.username} alt='' />
      </div>

      <div className='profile-user-settings'>
        <h1 className='profile-user-name'>{user.profile.username}</h1>

        <button className='btn profile-edit-btn'>Edit Profile</button>
        <button className='btn profile-edit-btn'>Follow</button>

        <button
          className='btn profile-settings-btn'
          aria-label='profile settings'
        >
          <i className='fas fa-cog' aria-hidden='true'></i>
        </button>
      </div>

      <div className='profile-stats'>
        <ul>
          <li>
            <span className='profile-stat-count'>164</span> posts
          </li>
          <li>
            <span className='profile-stat-count'>{user.profile.follower}</span>{' '}
            followers
          </li>
          <li>
            <span className='profile-stat-count'>{user.profile.following}</span>{' '}
            following
          </li>
        </ul>
      </div>

      <div className='profile-bio'>
        <p>
          <span className='profile-real-name'>{user.profile.name}</span> Lorem
          ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
        </p>
      </div>
    </div>
  );
};
