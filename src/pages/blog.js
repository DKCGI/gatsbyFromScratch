import React from 'react';
import Layout from '../templates/layout';
import { usePostData } from '../components/usePostData';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Blog = () => {
  const { edges } = usePostData();
  return (
    <Layout>
      <h1>Blog</h1>
      {edges.map((edge) => {
        return (
          <div>
            <h1>
              <Link to={'/' + edge.node.frontmatter.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </h1>
            <GatsbyImage
              image={getImage(edge.node.frontmatter.featuredImage)}
              alt={edge.node.frontmatter.featuredImage.name}
            ></GatsbyImage>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;
