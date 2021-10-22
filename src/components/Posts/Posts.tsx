import React from 'react';
import { PostItem } from './PostItem';
import { PostStarter } from './PostStarter';
import './Posts.css';
import { useAppSelector } from '../../app/hooks';
import { Post } from '../../helpers/interfaces';
import { selectUserPosts } from '../../features/post/postSelector';
import { motion } from 'framer-motion';

export const Posts = () => {
  const posts = useAppSelector(selectUserPosts);
  return (
    <motion.div
      initial={{ y: 20, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 25, damping: 5 }}
    >
      <PostStarter />
      <div className='main-posts'>
        {posts.map((post: Post, i) => (
          <PostItem key={i} post={post} />
        ))}
      </div>
    </motion.div>
  );
};
