import React from "react";
import styles from "../styles/layout.module.scss";
import {Helmet} from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";

export default({children}) => {
  if (!Array.isArray(children)) { children = [children]; }
  return (
    <>
      <Helmet htmlAttributes={{lang: 'sv'}}>
        <title>Andreas Åkerlöf - Frontendutvecklare - akerlof.se</title>
      </Helmet>

      <Header />

      <main>
        {children.map((child,i) => (
          <div 
            key={i} 
            id={child.props.parentId} 
            className={styles.section +' '+ (child.props.parentClassName || '')}
            children={child}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}