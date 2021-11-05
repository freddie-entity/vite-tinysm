import React from 'react';
import { PostItem } from './PostItem';
import { PostStarter } from './PostStarter';
import './Posts.css';

export const Posts = () => {
  return (
    <div>
      <PostStarter />
      <div className='main-posts'>
        {[...Array(8)].map((e, i) => (
          <PostItem key={i} />
        ))}
      </div>
    </div>
  );
};
