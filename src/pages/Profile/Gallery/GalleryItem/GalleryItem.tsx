import { Modal } from 'antd';
import React, { useState } from 'react';
import { Post } from '../../../../features/post/interface';
import { DetailPost } from '../../../../components/DetailPost/DetailPost';

interface Props {
  post: Post;
}

export const GalleryItem = ({ post }: Props) => {
  const [visible, setVisible] = useState('');

  return (
    <>
      <div className='gallery-item' onClick={() => setVisible(post.id)}>
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
      <Modal
        centered
        visible={visible === '' ? false : true}
        closeIcon={<i className='ri-close-line'></i>}
        width={'clamp(75%, 60vh, 800px)'}
        footer={null}
        onCancel={() => setVisible('')}
      >
        <DetailPost post_id={visible} />
      </Modal>
    </>
  );
};
