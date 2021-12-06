import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GetPosts, UserLikesPost } from '../../../features/post/postAction';
import { selectFeedPosts } from '../../../features/post/postSelector';
import { Post as IPost } from '../../../features/post/interface';
import { useAuth } from '../../../components/PrivateRoute/useAuth';
import './Post.css';
import { CreateComment } from '../../../features/comment/commentAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { DetailPost } from '../../../components/DetailPost/DetailPost';
import {
  AlterUserCommentsPost,
  AlterUserLikesPost,
} from '../../../features/post/postSlice';

export const Post = () => {
  const [visible, setVisible] = useState('');
  const [commentState, setCommentState] = useState('');
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const feedPost = useAppSelector(selectFeedPosts);
  const [turn, setTurn] = useState(1);
  useEffect(() => {
    dispatch(GetPosts(turn));
  }, [turn]);

  const onCommentChange = (e: any) => {
    setCommentState(e.target.value);
  };
  const turnIncrement = async () => {
    setTurn(turn + 1);
  };
  return (
    <>
      <InfiniteScroll
        dataLength={feedPost.feedPosts.length}
        next={turnIncrement}
        hasMore={feedPost.more}
        loader={<Skeleton active avatar paragraph={{ rows: 1 }} />}
        endMessage={
          <p style={{ textAlign: 'center', paddingTop: 20 }}>
            <b>You have reached the end!</b>
          </p>
        }
      >
        {feedPost.feedPosts.map((post: IPost, index) => (
          <div className='post'>
            <div className='info'>
              <Link to={`${post.username}`} className='user'>
                <div className='profile-pic'>
                  <img src='https://source.unsplash.com/random/' alt='' />
                </div>
                <p className='username'>{post.username}</p>
              </Link>
              <div className='options'>
                <i className='ri-more-fill'></i>
              </div>
            </div>
            <img
              src={'http://localhost:8000' + post.images[0]}
              className='post-image'
              alt=''
            />
            <div className='post-content'>
              <div className='reaction-wrapper'>
                <div
                  className='icon'
                  onClick={() => {
                    dispatch(
                      UserLikesPost({
                        username: user.user.username,
                        post_id: post.id,
                      })
                    );
                    dispatch(AlterUserLikesPost(index));
                  }}
                >
                  <i className='ri-heart-3-line'></i>
                </div>
                <div className='icon' onClick={() => setVisible(post.id)}>
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
                <div>{post.like_count} likes</div>
                <div>{post.comment_count} comments</div>
              </p>
              <p className='description'>
                <span>{post.username}</span>
                {post.content}
              </p>
              <p className='post-cmt' onClick={() => setVisible(post.id)}>
                {post.comment_count < 1
                  ? ''
                  : post.comment_count === 1
                  ? 'View 1 comment'
                  : `View all ${post.comment_count} comments`}
              </p>
              <p className='post-time'>at {post.at}</p>
            </div>
            <div className='comment-wrapper'>
              <div className='icon'>
                <i className='ri-ghost-smile-line'></i>
              </div>
              <input
                type='text'
                name='content'
                className='comment-box'
                placeholder='Add a comment'
                value={commentState}
                onChange={onCommentChange}
              />
              <button
                className='comment-btn action-btn'
                onClick={() => {
                  dispatch(
                    CreateComment({
                      content: commentState,
                      post_id: post.id,
                      username: user.user.username,
                    })
                  );
                  dispatch(AlterUserCommentsPost(index));
                  setCommentState('');
                }}
              >
                Post
              </button>
            </div>
          </div>
        ))}
      </InfiniteScroll>
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
