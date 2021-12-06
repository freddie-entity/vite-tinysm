import React from 'react';
import './SearchResult.css';

export const SearchResult = () => {
  return (
    <div className='search-result-box'>
      <div className='search-result-box-wrapper'>
        <div className='nb-item'>
          <div className='search-card'>
            <div className='profile-pic'>
              <img src={`https://source.unsplash.com/random/`} alt='' />
            </div>
            <div>
              <p className='username'>ntt</p>
              <p className='sub-text'>day la ban ntt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
