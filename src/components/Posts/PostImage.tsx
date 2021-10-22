import React from 'react';
import { PostImageItem } from './PostImageItem';

interface Props {
  imageList: string[];
}

export const PostImage = ({ imageList }: Props) => {
  return (
    <div>
      {imageList.map((image: string, index: number) => {
        if (index === 0) return <PostImageItem postImage={image} />;
      })}
    </div>
  );
};
