import React from 'react';

const Generic = ({ pageContext }) => {
  return (
    <div>
      <h1 className='title'>Generic Template</h1>
      <h2>{pageContext.description}</h2>
    </div>
  );
};
export default Generic;
