import React from "react";
import logo from "../images/logo.svg";
import Menu from "../components/menu";

import styles from "../styles/layout.module.scss";

export default({children}) => (
  <>
    <header className={styles.header}>
      <a href="#home" onClick={''}><img src={logo} className={styles.logo} alt="Logo" /></a>
      <Menu />
    </header>
    <main>
      {children.map(child => <div className={styles.section}>{child}</div>)}
    </main>
  </>
)