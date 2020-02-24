import React from "react";
import styles from "../styles/menu.module.scss";
import Nav from "../components/nav";

let deg = 0;

export const animateLogo = () => {
  deg = (deg === 0) ? 720 : 0;
  document.querySelector('#logo').style = `transform: rotate(${deg}deg)`;
}

export const closeMenu = (el) => {
  if (el.target.tagName.toUpperCase() === 'A' || 'IMG') {
    document.querySelector('#burger').checked = false;
    animateLogo();
  } 
}

export default() => (
  <div className={styles.menu}>
    <input id="burger" type="checkbox" className={styles.burger} />
    <label htmlFor="burger" className={styles.burgerLines}>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </label>
    
    <Nav onClick={closeMenu} />

  </div>
);