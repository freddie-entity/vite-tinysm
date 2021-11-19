import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useAuth } from '../../../components/PrivateRoute/useAuth';
import { GetPostsByUsername } from '../../../features/post/postAction';
import { selectProfilePosts } from '../../../features/post/postSelector';
import './Gallery.css';
import { GalleryItem } from './GalleryItem/GalleryItem';
import { ManyPictureIndicator } from './ManyPictureIndicator/ManyPictureIndicator';
import { VideoIndicator } from './VideoIndicator/VideoIndicator';

export const Gallery = () => {
  const [turn, setTurn] = useState(1);
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const profilePost = useAppSelector(selectProfilePosts);
  useEffect(() => {
    dispatch(GetPostsByUsername({ username: user.user.username, turn: turn }));
  }, [user.user.username, turn]);

  const turnIncrement = async () => {
    setTurn(turn + 1);
  };
  return (
    <InfiniteScroll
      dataLength={profilePost.profilePosts.length}
      next={turnIncrement}
      hasMore={profilePost.more}
      loader={
        <h4 style={{ textAlign: 'center', paddingTop: 20 }}>Loading...</h4>
      }
      endMessage={
        <p style={{ textAlign: 'center', paddingTop: 20 }}>
          <b>You have reached the end!</b>
        </p>
      }
    >
      <div className='gallery'>
        {profilePost.profilePosts.map((post) => (
          <GalleryItem post={post} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
