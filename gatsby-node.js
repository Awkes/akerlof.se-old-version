// Skapa slugs och nodes för bloggposter
const {createFilePath} = require('gatsby-source-filesystem');
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'MarkdownRemark' && /\/posts\//.test(node.fileAbsolutePath)) {
    const slug = createFilePath({ node, getNode, basePath: 'posts'});
    createNodeField({
      node,
      name: 'slug',
      value: '/blog'+slug
    })
  }
}

// Skapa post-sidor från slugs
const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions;
  graphql(`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  .then(result => result.data.allMarkdownRemark.nodes.forEach(({fields}) => { 
    createPage({
      path: fields.slug,
      component: path.resolve('./src/pages/blog.js'),
      context: { slug: fields.slug }
    });
  }));
}