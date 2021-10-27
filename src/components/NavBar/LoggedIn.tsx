import React from 'react';
import './NavBar.css';
import { motion } from 'framer-motion';
export const LoggedIn = () => {
  return (
    <motion.div
      className='header-content'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.i
        className='ri-notification-4-fill'
        variants={iconVariants}
      ></motion.i>
      <motion.i className='ri-mail-unread-fill'></motion.i>
      <a href='#' className='btn'>
        <i className='ri-add-circle-fill'></i>
        <div className='btn-text'>Add Photo</div>
      </a>
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {},
};

const iconVariants = {
  hidden: {},
  visible: {},
};
