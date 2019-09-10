import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div
          className={`${styles.header__overlay} ${
            isOpen ? 'animation--opacityIn' : 'hidden'
          }`}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen && 'is-active'} hamburger hamburger--slider`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <nav
          className={`${styles.menu} ${
            isOpen ? 'animation--opacityIn' : 'hidden'
          }`}
        >
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Home
              </a>
            </li>
            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Contact
              </a>
            </li>
            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Search
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
