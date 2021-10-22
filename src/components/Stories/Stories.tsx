import React from 'react';
import { Reels } from './Reels';
import { StoriesTitle } from './StoriesTitle';
import { motion } from 'framer-motion';

export const Stories = () => {
  return (
    <motion.div
      className='stories-container'
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 25 }}
    >
      <StoriesTitle />
      <Reels />
    </motion.div>
  );
};
