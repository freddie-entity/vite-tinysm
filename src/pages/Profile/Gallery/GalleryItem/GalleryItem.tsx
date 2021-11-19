import React from 'react';
import { Post } from '../../../../helpers/interfaces';

interface Props {
  post: Post;
}

export const GalleryItem = ({ post }: Props) => {
  return (
    <div className='gallery-item'>
      <img
        src={'http://localhost:8000' + post.images[0]}
        className='gallery-image'
        alt=''
      />

      <div className='gallery-item-info'>
        <ul>
          <li className='gallery-item-likes'>
            <span className='visually-hidden'>Likes:</span>
            <i className='fas fa-heart' aria-hidden='true'></i>{' '}
            {post.like_count}
          </li>
          <li className='gallery-item-comments'>
            <span className='visually-hidden'>Comments:</span>
            <i className='fas fa-comment' aria-hidden='true'></i>{' '}
            {post.like_count}
          </li>
        </ul>
      </div>
    </div>
  );
};
