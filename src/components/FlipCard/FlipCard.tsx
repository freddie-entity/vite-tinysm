import React from 'react';
import './FlipCard.css';

export const FlipCard = () => {
  return (
    <div className='card middle'>
      <div className='front'>
        <img src='img.jpg' alt='' />
      </div>
      <div className='back'>
        <div className='back-content middle'>
          <h2>DarkCode</h2>
          <span>Youtube Channel</span>
          <div className='sm'>
            <a href='#'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fab fa-youtube'></i>
            </a>
            <a href='#'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
