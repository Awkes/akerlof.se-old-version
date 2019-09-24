import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/post.module.scss";

export default({postData}) => {
  // Om vi har någon bloggpost i postData så används den som post, annars hämtas senaste bloggposten
  const post = postData || useStaticQuery( 
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }, 
          limit: 1
        ) {
          nodes {
            frontmatter {
              date
              img
              title
            }
            html
          }
        }
      }
    `
  );
  const title = post.allMarkdownRemark.nodes[0].frontmatter.title;
  const date = post.allMarkdownRemark.nodes[0].frontmatter.date;
  const img = post.allMarkdownRemark.nodes[0].frontmatter.img;
  const children = post.allMarkdownRemark.nodes[0].html;
  return (
    <div className={styles.content}>
      <Heading>{title}</Heading>
      <div className={styles.date}>{date}</div>
      <div className={styles.post}>
        {img ? <img src={img} alt={title} className={styles.img} /> : ''}
        <span className={styles.txt} dangerouslySetInnerHTML={{__html: children}} />
      </div>
    </div>
  );
}