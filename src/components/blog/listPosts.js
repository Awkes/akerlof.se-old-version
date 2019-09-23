import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import styles from "../../styles/listPosts.module.scss";

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        
      }
    `
  );
  return (
    <div className={styles.content}>
      {/* {data.posts.nodes.map(p => <p>{p.text}</p>)} */}
    </div>
  );
}