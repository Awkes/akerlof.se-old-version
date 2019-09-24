import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/about.module.scss";

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        allAboutYaml {
          nodes {
            text
          }
        }
      }
    `
  );
  return (
    <div className={styles.content}>
      <Heading>Andreas</Heading>
      {data.allAboutYaml.nodes.map(p => <p>{p.text}</p>)}
    </div>
  );
}