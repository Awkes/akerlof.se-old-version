import React from "react";
import {Helmet} from "react-helmet";
import logo from "../images/logo.svg";
import Menu, {closeMenu, animateLogo} from "../components/menu";
import styles from "../styles/layout.module.scss";

export default({children}) => (
  <>
    <Helmet>
      <title>Andreas Åkerlöf - Frontendutvecklare - akerlof.se</title>
    </Helmet>
    <header className={styles.header}>
      <a href="#home" onClick={closeMenu}>
        <img src={logo} className={styles.logo} onLoad={animateLogo} id="logo" alt="Logo" />
      </a>
      <Menu />
    </header>
    <main>
      {children.map((child,i) => <div key={i} id={child.props.parentId} className={styles.section}>{child}</div>)}
    </main>
  </>
);