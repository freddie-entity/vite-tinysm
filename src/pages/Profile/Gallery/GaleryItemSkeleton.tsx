import { Skeleton } from 'antd';
import React from 'react';
import './Gallery.css';

export const GalleryItemSkeleton = () => {
  return (
    <div className='gallery'>
      <Skeleton.Button active shape='round' className='gallery-image' />
      <Skeleton.Button active shape='round' className='gallery-image' />
      <Skeleton.Button active shape='round' className='gallery-image' />
    </div>
  );
};
