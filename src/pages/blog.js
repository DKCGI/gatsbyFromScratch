import React from 'react';
import Layout from '../templates/layout';
import { usePostData } from '../components/usePostData';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Blog = () => {
  const { edges } = usePostData();
  return (
    <Layout>
      <h1>Blog</h1>
      <div className='page-container blog-container'>
        <PostsContainer>
          {edges.map((edge) => {
            return (
              <div className='post-container' key={edge.node.fields.slug}>
                <Link to={edge.node.fields.slug}>
                  <p className='date'>{edge.node.frontmatter.date}</p>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <GatsbyImage
                    image={getImage(edge.node.frontmatter.featuredImage)}
                    alt={edge.node.frontmatter.featuredImage.name}
                  ></GatsbyImage>
                  <p className='excerpt'>{edge.node.excerpt}</p>
                  <p className='ttr'>A lovely {edge.node.timeToRead} read.</p>
                </Link>
              </div>
            );
          })}
        </PostsContainer>
      </div>
    </Layout>
  );
};

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  column-gap: 20px;
  padding: 20px;
  .post-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    background-color: rgb(186, 200, 226);
    padding: 20px;
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Blog;
