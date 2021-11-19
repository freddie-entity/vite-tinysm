import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import { AvatarPopup } from '../../components/AvatarPopup/AvatarPopup';

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: 'home',
  },
  {
    id: 1,
    navTitle: 'showreel',
  },
  {
    id: 2,
    navTitle: 'services',
  },
  {
    id: 3,
    navTitle: 'about',
  },
  {
    id: 4,
    navTitle: 'contact',
  },
];

const DUCK_IMG =
  'https://images.pexels.com/photos/1837168/pexels-photo-1837168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
export const Test = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 1,
      y: '0%',
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: '0%',
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: '-100%',
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <main className='container'>
      <motion.nav
        initial='closed'
        animate={mobileNavOpen ? 'opened' : 'closed'}
      >
        <div>
          <AvatarPopup />
        </div>
        <div className='logo-container'>
          <motion.h1 variants={hideNavItemsVariant}>Tinysm</motion.h1>
        </div>
        <div className='menu-container'>
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            Menu
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className='mobile-menu'>
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            Close
          </motion.button>
          <motion.ul variants={ulVariant}>
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className='contact'>
            <h5>+852 5650 2233</h5>
            <h5>hi@designagency.com</h5>
          </motion.div>
        </motion.div>
      </motion.nav>

      <motion.div
        initial={fadeInStart}
        animate={fadeInEnd}
        transition={fadeInTransition}
        className='img-container'
      >
        <img src={DUCK_IMG} alt='Duck' />
      </motion.div>
      <motion.div
        initial={fadeInStart}
        animate={fadeInEnd}
        transition={fadeInTransition}
        className='img-container'
      >
        <img
          src='https://znews-photo.zadn.vn/w1920/Uploaded/mzdqa/2021_11_05/vn_index_5_11_1.png'
          alt='Duck'
        />
      </motion.div>
    </main>
  );
};
