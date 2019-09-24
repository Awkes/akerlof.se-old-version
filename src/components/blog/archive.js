import React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import Heading from "../../components/heading";
import Paginate from "../../components/paginate"
import styles from "../../styles/archive.module.scss";

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/posts/"}},
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            frontmatter {
              date
              title
              img
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    `
  );
  return (
    <div className={styles.content}>
      <Heading>Arkiv</Heading>
      <Paginate>
        {data.allMarkdownRemark.nodes.map((post, i) => 
          <Link to={post.fields.slug} key={i} className={styles.post}>
            <div className={styles.imgDiv}>
              {
                post.frontmatter.img
                ? <img src={post.frontmatter.img} alt={post.frontmatter.title} className={styles.img} />
                : ''
              }
            </div>
            <div className={styles.text}>
              <h2>
                {post.frontmatter.title}
                <br />
                <span className={styles.date}>{post.frontmatter.date}</span>
              </h2>
              {post.excerpt}
            </div>
          </Link>
        )}
      </Paginate>
    </div>
  );
}