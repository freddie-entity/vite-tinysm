import React from 'react';
import { Post } from '../../helpers/interfaces';
import { PostImage } from './PostImage';
import './Posts.css';

interface Props {
  key: number;
  post: Post;
}
export const PostItem = ({ key, post }: Props) => {
  return (
    <div className='post-box'>
      <PostImage imageList={post.images} />
      <div className='post-info'>
        <div className='post-profile'>
          <div className='post-img'>
            <img src='/profile10.jpg' alt='' />
          </div>
          <h3>{post.content}</h3>
        </div>
        <div className='likes'>
          <div>
            <i className='ri-heart-line'></i>
          </div>
          <span>{post.like_count}</span>
          <i className='ri-chat-3-line'></i>
          <span>{post.comment_count}</span>
        </div>
      </div>
    </div>
  );
};
