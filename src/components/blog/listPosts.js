import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import styles from "../../styles/listPosts.module.scss";

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
          nodes {
            frontmatter {
              date
              title
              img
            }
            excerpt
          }
        }
      }
    `
  );
  return (
    <div className={styles.content}>
      {data.allMarkdownRemark.nodes.map(post => 
        <p> {post}</p>
      )}
    </div>
  );
}