import React from "react";
import Nav from "../components/nav";
import styles from "../styles/footer.module.scss";

export default({children}) => (
  <footer className={styles.footer}>
    <Nav className={styles.nav} />

    <div>
      Copyright &copy; Andreas Åkerlöf 2019
    </div>
  </footer>
);