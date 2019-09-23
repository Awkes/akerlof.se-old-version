import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/post.module.scss";

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        
      }
    `
  );
  return (
    <div className={styles.content}>
      <Heading>Post</Heading>
      {/* {data.post} */}
    </div>
  );
}