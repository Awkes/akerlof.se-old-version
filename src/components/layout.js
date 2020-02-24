import React from "react";
import styles from "../styles/layout.module.scss";
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

export default({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  );
  if (!Array.isArray(children)) { children = [children]; }
  return (
    <>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
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