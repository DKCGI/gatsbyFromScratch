import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../templates/layout';
import styled from '@emotion/styled';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  const image = getImage(markdownRemark.frontmatter.featuredImage);
  return (
    <Layout>
      <MarkdownContainer>
        {image && (
          <div className='image-container'>
            <GatsbyImage
              image={image}
              alt={markdownRemark.frontmatter.featuredImage.name}
              loading='eager'
            ></GatsbyImage>
          </div>
        )}
        <h1 className='title'>{markdownRemark.frontmatter.title}</h1>
        <div
          className='markdown-container'
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        ></div>
      </MarkdownContainer>
    </Layout>
  );
};

const MarkdownContainer = styled.div`
  .image-container {
    max-height: calc(100vh - 70px);
    display: flex;
  }
  .markdown-container {
    background-color: aliceblue;
    display: grid;
    justify-content: center;
    padding: 20px;
    h1,
    h2,
    h3 {
      text-align: center;
      padding-bottom: 10px;
    }
    p {
      max-width: 800px;
      padding: 10px;
    }
  }
`;

export const pageQuery = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          name
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;
export default Markdown;
