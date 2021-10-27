import React from 'react';

interface Props {
  postImage: string;
}

const baseURL = 'http://localhost:8000';
export const PostImageItem = ({ postImage }: Props) => {
  return (
    <div>
      <img src={`${baseURL}${postImage}`} alt='' />
    </div>
  );
};
