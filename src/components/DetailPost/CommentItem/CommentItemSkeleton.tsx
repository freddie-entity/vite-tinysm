import { Skeleton } from 'antd';
import React from 'react';

export const CommentItemSkeleton = () => {
  return <Skeleton.Input active={true} className='dp-cmt-box-wrapper' />;
};
