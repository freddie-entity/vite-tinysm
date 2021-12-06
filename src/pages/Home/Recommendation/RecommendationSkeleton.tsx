import { Skeleton } from 'antd';
import React from 'react';
import './Recommendation.css';

export const RecommendationSkeleton = () => {
  return <Skeleton.Input active={true} className='profile-card-skeleton' />;
};
