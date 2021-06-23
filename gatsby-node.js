const path = require('path');
const data = require('./src/data/pageData');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  data.forEach((page) => {
    createPage({
      path: page.slug,
      context: page,
      component: path.resolve('src/templates/Generic.js'),
    });
  });
  const mdPages = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  mdPages.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.frontmatter.slug,
      component: path.resolve('src/templates/Markdown.js'),
      context: {
        slug: edge.node.frontmatter.slug,
      },
    });
  });
};
