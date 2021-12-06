import { Skeleton } from 'antd';
import React from 'react';
import './Info.css';

export const InfoSkeleton = () => {
  return (
    <div className='profile'>
      <Skeleton.Avatar active />
      <Skeleton.Button active className='profile-bio-skeleton' />
    </div>
  );
};
