import React from 'react';
import { Reels } from './Reels';
import { StoriesTitle } from './StoriesTitle';

export const Stories = () => {
  return (
    <div className='stories-container'>
      <StoriesTitle />
      <Reels />
    </div>
  );
};
