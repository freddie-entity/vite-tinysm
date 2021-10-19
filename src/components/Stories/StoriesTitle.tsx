import React from 'react';
import './Stories.css';

export const StoriesTitle = () => {
  return (
    <div className='stories-title'>
      <h1>Stories</h1>
      <a href='#' className='btn'>
        <i className='ri-play-circle-line'></i>
        <div className='text'>Watch all</div>
      </a>
    </div>
  );
};
