import React from "react";
import styles from "../styles/layout.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";

export default({children}) => (
  <>
    <Header />

    <main>
      {children.map((child,i) => (
        <div 
          key={i} 
          id={child.props.parentId} 
          className={styles.section}
          children={child}
        />
      ))}
    </main>

    <Footer />
  </>
);