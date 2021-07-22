import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../templates/layout';

const Index = ({ data }) => {
  return (
    <Layout>
      <h1 className='title'>Hello World!</h1>
      <StaticImage
        formats={['jpg']}
        src='../images/treeInForest.jpg'
        alt='A Tree in a Forest during the day.'
        loading='eager'
        // placeholder='blurred'
        // layout='fixed'
      />
      <p className='caption'>
        Photo by{' '}
        <a href='https://unsplash.com/@veeterzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          veeterzy
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
      </p>
    </Layout>
  );
};

export default Index;
