import React from 'react';
import { Post } from './Post/Post';
import { Recommendation } from './Recommendation/Recommendation';
import { Stories } from './Stories/Stories';
import './Home.css';

export const Home = () => {
  return (
    <div className='wrapper'>
      <div className='left-col'>
        <Stories />
        <Post />
      </div>
      <div className='right-col'>
        <Recommendation />
      </div>
    </div>
  );
};
