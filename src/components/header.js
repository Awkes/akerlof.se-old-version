import React from "react";
import logo from "../images/logo.svg";
import Menu, {closeMenu, animateLogo} from "../components/menu";
import styles from "../styles/header.module.scss";

export default({children}) => (
  <>
    <header className={styles.header}>
      <a href="/#home" onClick={closeMenu}>
        <img src={logo} className={styles.logo} onLoad={animateLogo} id="logo" alt="Logo" />
      </a>
      <Menu />
    </header>
  </>
);