import React from 'react';
import './Posts.css';

export const PostItem = () => {
  return (
    <div className='post-box'>
      <img src='/post1.jpg' alt='' />

      <div className='post-info'>
        <div className='post-profile'>
          <div className='post-img'>
            <img src='/profile10.jpg' alt='' />
          </div>
          <h3>Marques B</h3>
        </div>
        <div className='likes'>
          <i className='ri-heart-line'></i>
          <span>84.4k</span>
          <i className='ri-chat-3-line'></i>
          <span>88</span>
        </div>
      </div>
    </div>
  );
};
