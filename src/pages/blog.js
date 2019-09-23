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
      postData={data}
    />
    <Archive parentId="archive" />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        img
      }
    }
  }
`;