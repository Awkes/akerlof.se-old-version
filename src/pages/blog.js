import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Post from "../components/blog/post";
import Archive from "../components/blog/archive";
import stylesPost from "../styles/post.module.scss";

export default ({data}) => (
  <Layout>
    <Post 
      parentId="post"
      parentClassName={stylesPost.parent}
      title = {data.allMarkdownRemark.nodes[0].frontmatter.title}
      date = {data.allMarkdownRemark.nodes[0].frontmatter.date}
      img = {data.allMarkdownRemark.nodes[0].frontmatter.img}
      children = {data.allMarkdownRemark.nodes[0].html}
    />
    <Archive parentId="archive" />
  </Layout>
);

// Om slug är angiven hämtas post med aktuell slug, annars hämtas senaste posten.
export const query = graphql`
  query($slug: String) {
    allMarkdownRemark(
      filter: {fields: {slug: { eq: $slug}}}, 
      sort: { fields: [frontmatter___date], order: DESC }
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
`;