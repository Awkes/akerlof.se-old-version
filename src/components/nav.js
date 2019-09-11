import React from "react";
import styles from "../styles/nav.module.scss";

const NavLink = ({url, children}) => (
    <li key={url}>
      <a href={url} className={styles.navLink}>{children}</a>
    </li>
);

export default({onClick}) => (
  <nav onClick={onClick}>
    <ul className={styles.navList}>
      <NavLink url="#about">Om mig</NavLink>
      {/* <NavLink url="#skills">Skills</NavLink> */}
      <NavLink url="#portfolio">Portfolio</NavLink>
      <NavLink url="#contact">Kontakt</NavLink>
    </ul>
  </nav>
);