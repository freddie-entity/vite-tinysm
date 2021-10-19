import React from 'react';
import styles from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderinner}>
        <div className={styles.loaderinner}></div>
      </div>
    </div>
  );
};
