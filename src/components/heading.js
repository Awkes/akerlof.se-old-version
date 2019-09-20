import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/heading.module.scss";

export default({children}) => (
  <VisibilitySensor>
    {({isVisible}) => (
      <h1 className={`${styles.heading} ${isVisible ? styles.active : ''}`}>
        <span className={styles.underlined}>{children}</span>
      </h1>
    )}
  </VisibilitySensor>
);