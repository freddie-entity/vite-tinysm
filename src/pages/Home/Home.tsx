import React from 'react';
import { Posts } from '../../components/Posts/Posts';
import { Stories } from '../../components/Stories/Stories';

export const Home = () => {
  return (
    <div>
      <Stories/>
      <Posts />
    </div>
  );
};
