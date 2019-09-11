import React from "react";
import {Helmet} from "react-helmet";
import logo from "../images/logo.svg";
import Menu, {closeMenu, animateLogo} from "../components/menu";
import styles from "../styles/layout.module.scss";

export default({children}) => (
  <>
    <Helmet htmlAttributes={{lang: 'sv'}}>
      <title>Andreas Åkerlöf - Frontendutvecklare - akerlof.se</title>
    </Helmet>
    <header className={styles.header}>
      <a href="#home" onClick={closeMenu}>
        <img src={logo} className={styles.logo} onLoad={animateLogo} id="logo" alt="Logo" />
      </a>
      <Menu />
    </header>
  </>
);