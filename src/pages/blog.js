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
      <h1 className='title'>Blog</h1>
      <div className='page-container blog-container'>
        <PostsContainer>
          {edges.map((edge) => {
            return (
              <div className='post-container' key={edge.node.fields.slug}>
                <Link to={edge.node.fields.slug}>
                  <h2 className='title'>{edge.node.frontmatter.title}</h2>
                  <p className='date'>{edge.node.frontmatter.date}</p>

                  <GatsbyImage
                    image={getImage(edge.node.frontmatter.featuredImage)}
                    alt={edge.node.frontmatter.featuredImage.name}
                  ></GatsbyImage>

                  <p className='excerpt'>{edge.node.excerpt}</p>
                  <p className='ttr'>A {edge.node.timeToRead} min read.</p>
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
  text-align: center;
  .post-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    background-color: rgb(186, 200, 226);
    padding: 20px;
    .date {
      text-align: center;
      padding: 10px;
    }
    .excerpt {
      margin: auto;
      text-align: left;
      padding: 20px 0;
      max-width: 600px;
      color: #222;
    }
    .ttr {
      padding: 10px;
    }
    a {
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Blog;
