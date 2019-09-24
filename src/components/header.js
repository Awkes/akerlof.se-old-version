import React from "react";
import logo from "../images/logo.svg";
import Menu, {closeMenu, animateLogo} from "../components/menu";
import {Link} from "gatsby";
import styles from "../styles/header.module.scss";

export default({children}) => (
  <>
    <header className={styles.header}>
      <Link to="/#home" onClick={closeMenu}>
        <img src={logo} className={styles.logo} onLoad={animateLogo} id="logo" alt="Logo" />
      </Link>
      <Menu />
    </header>
  </>
);