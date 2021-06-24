import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Index = ({ data }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <StaticImage
        formats={['webp']}
        src='../images/treeInForest.jpg'
        alt='A Tree in a Forest during the day.'
        // placeholder='blurred'
        // layout='fixed'
      />
      <p>
        Photo by{' '}
        <a href='https://unsplash.com/@veeterzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          veeterzy
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default Index;
