import { useStaticQuery, graphql } from 'gatsby';

export const usePostData = () => {
  const posts = useStaticQuery(
    graphql`
      query PostData {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                title
                featuredImage {
                  name
                  childImageSharp {
                    gatsbyImageData(width: 600)
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return posts.allMarkdownRemark;
};
