const path = require('path');
const data = require('./src/data/pageData');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  data.forEach((page) => {
    createPage({
      path: page.slug,
      context: page,
      component: path.resolve('src/templates/generic.js'),
    });
  });
  const mdPages = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  mdPages.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: `${__dirname}/src/templates/markdown.js`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
