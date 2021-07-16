import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../templates/layout';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  const image = getImage(markdownRemark.frontmatter.featuredImage);
  return (
    <Layout>
      <div className='markdown-container'>
        {image && (
          <div class='image-container'>
            <GatsbyImage
              image={image}
              alt={markdownRemark.frontmatter.featuredImage.name}
              loading='eager'
            ></GatsbyImage>
          </div>
        )}
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        featuredImage {
          name
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;
export default Markdown;
