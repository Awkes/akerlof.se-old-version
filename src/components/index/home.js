import React from "react";
import Icons from "../../components/icons";
import styles from "../../styles/home.module.scss";

export default() => (
  <div className={styles.content}>
    <h1 className={styles.h1}>Andreas Åkerlöf</h1>
    <h2 className={styles.h2}>Frontend Developer</h2>
    <Icons />
  </div>
);