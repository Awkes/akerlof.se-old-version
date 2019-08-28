import React from "react";
import styles from "../styles/menu.module.scss";

const MenuLink = ({url, children}) => {
  const closeMenu = () => {
    document.querySelector('#burger').checked = false;
  }
  return (
    <li key={url}>
      <a href={url} className={styles.navLink} onClick={closeMenu}>{children}</a>
    </li>
  );  
}

export default() => (
  <div className={styles.menu}>
    <input id="burger" type="checkbox" className={styles.burger} />
    <label htmlFor="burger" className={styles.burgerLines}>
      <div className={styles.burgerLine}></div>
      <div className={styles.burgerLine}></div>
      <div className={styles.burgerLine}></div>
    </label>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <MenuLink url="#aboutme">Om mig</MenuLink>
        <MenuLink url="#skills">Skills</MenuLink>
        <MenuLink url="#portfolio">Portfolio</MenuLink>
        <MenuLink url="#contact">Kontakt</MenuLink>
      </ul>
    </nav>
  </div>
);