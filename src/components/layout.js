import React from "react";
import logo from "../images/logo.svg";
import Menu, {closeMenu, animateLogo} from "../components/menu";
import styles from "../styles/layout.module.scss";

export default({children}) => (
  <>
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