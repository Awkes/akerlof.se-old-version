import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/post.module.scss";

export default({postData}) => {
  // Om vi har någon bloggpost i postData så används den som post, annars hämtas senaste bloggposten
  const post = postData || useStaticQuery( 
    graphql`
      query {
        markdownRemark {
          html
          frontmatter {
            date
            title
            img
          }
        }
      }
    `
  );
  const title = post.markdownRemark.frontmatter.title;
  const date = post.markdownRemark.frontmatter.date;
  const img = post.markdownRemark.frontmatter.img;
  const children = post.markdownRemark.html;
  return (
    <div className={styles.content}>
      <Heading>{title}</Heading>
      <div className={styles.date}>{date}</div>
      <div>
        {img ? <img src={img} alt={title} className={styles.img} /> : ''}
        {children }
      </div>
    </div>
  );
}