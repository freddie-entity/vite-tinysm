import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GetPosts } from '../../../features/post/postAction';
import { selectFeedPosts } from '../../../features/post/postSelector';
import { Post as IPost } from '../../../helpers/interfaces';
import { useAuth } from '../../../components/PrivateRoute/useAuth';
import './Post.css';
import { CreateComment } from '../../../features/comment/commentAction';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Post = () => {
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
    <InfiniteScroll
      dataLength={feedPost.feedPosts.length}
      next={turnIncrement}
      hasMore={feedPost.more}
      loader={
        <h4 style={{ textAlign: 'center', paddingTop: 20 }}>Loading...</h4>
      }
      endMessage={
        <p style={{ textAlign: 'center', paddingTop: 20 }}>
          <b>You have reached the end!</b>
        </p>
      }
    >
      <div className='post'>
        {feedPost.feedPosts.map((post: IPost) => (
          <>
            <div className='info'>
              <div className='user'>
                <div className='profile-pic'>
                  <img src='/cover 1.png' alt='' />
                </div>
                <p className='username'>{post.username}</p>
              </div>
              <img src='/option.PNG' className='options' alt='' />
            </div>
            <img
              src={'http://localhost:8000' + post.images[0]}
              className='post-image'
              alt=''
            />
            <div className='post-content'>
              <div className='reaction-wrapper'>
                <img src='/like.PNG' className='icon' alt='' />
                <img src='/comment.PNG' className='icon' alt='' />
                <img src='/send.PNG' className='icon' alt='' />
                <img src='/save.PNG' className='save icon' alt='' />
              </div>
              <p className='likes'>
                {post.like_count} likes | {post.comment_count} comments
              </p>
              <p className='description'>
                <span>{post.username}</span>
                {post.content}
              </p>
              <p className='post-time'>
                {post.comment_count < 1
                  ? ''
                  : post.comment_count === 1
                  ? 'View 1 comment'
                  : `View all ${post.comment_count} comments`}
              </p>
              <p className='post-time'>at {post.at}</p>
            </div>
            <div className='comment-wrapper'>
              <img src='/smile.PNG' className='icon' alt='' />
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
                onClick={() =>
                  dispatch(
                    CreateComment({
                      content: commentState,
                      post_id: post.id,
                      username: user.user.username,
                    })
                  )
                }
              >
                Post
              </button>
            </div>
          </>
        ))}
      </div>
    </InfiniteScroll>
  );
};
