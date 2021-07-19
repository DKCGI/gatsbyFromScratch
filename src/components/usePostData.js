import { useStaticQuery, graphql } from 'gatsby';

export const usePostData = () => {
  const posts = useStaticQuery(
    graphql`
      query PostData {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
          edges {
            node {
              timeToRead
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "ddd MMM Do yy")
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
