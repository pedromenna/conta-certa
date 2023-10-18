import React from 'react';
import styles from './FloatingButton.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const FloatingButton = () => {
  return (
    <div className={styles.floatingButton}>
      <button onClick={scrollToTop} className={styles.button}>
      <i class="bi bi-plus"></i>
      </button>
    </div>
  );
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default FloatingButton;
