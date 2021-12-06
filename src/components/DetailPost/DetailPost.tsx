import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { GetPostById } from '../../features/post/postAction';
import { selectDetailPost } from '../../features/post/postSelector';
import { CommentItem } from './CommentItem/CommentItem';
import './DetailPost.css';

interface Props {
  post_id: string;
}
export const DetailPost = ({ post_id }: Props) => {
  const dispatch = useAppDispatch();
  const detailPost = useAppSelector(selectDetailPost);
  useEffect(() => {
    dispatch(GetPostById(post_id));
  }, [post_id]);
  return (
    <>
      {detailPost.loading ? (
        'Loading'
      ) : (
        <div className='dp-container'>
          <div className='dp-left'>
            <img className='dp-img' src='https://source.unsplash.com/random/' />
          </div>
          <div className='dp-right'>
            <div className='dp-info'>
              <div className='dp-user'>
                <div className='dp-profile-pic'>
                  <img src='https://source.unsplash.com/random/' alt='' />
                </div>
                <p className='dp-username'>{detailPost.detailPost.username}</p>
              </div>
              <div className='dp-options'>
                <i className='ri-more-fill'></i>
              </div>
            </div>
            <div className='dp-cmt-box'>
              <div className='dp-cmt-box-wrapper'>
                <div className='nb-item'>
                  <CommentItem post_id={post_id} />
                </div>
              </div>
            </div>
            <div className='dp-post-content'>
              <div className='reaction-wrapper'>
                <div className='icon'>
                  <i className='ri-heart-3-line'></i>
                </div>
                <div className='icon'>
                  <i className='ri-chat-3-line'></i>
                </div>
                <div className='icon'>
                  <i className='ri-send-plane-line'></i>
                </div>
                <div className='save icon'>
                  <i className='ri-bookmark-line'></i>
                </div>
              </div>
              <p className='likes'>
                <div>{detailPost.detailPost.like_count} likes</div>
                <div>{detailPost.detailPost.comment_count} comments</div>
              </p>
              <p className='description'>
                <span>{detailPost.detailPost.username}</span>
                {detailPost.detailPost.content}
              </p>
              <p className='post-time'>at {detailPost.detailPost.at}</p>
              <div className='comment-wrapper'>
                <div className='icon'>
                  <i className='ri-ghost-smile-line'></i>
                </div>
                <input
                  type='text'
                  name='content'
                  className='comment-box'
                  placeholder='Add a comment'
                />
                <button className='comment-btn action-btn'>Post</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
