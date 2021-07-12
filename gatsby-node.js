const path = require('path');
const data = require('./src/data/pageData');
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
      component: `${__dirname}/src/templates/markdown.js`,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    });
  });
};
