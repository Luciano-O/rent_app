import React from 'react';
import propTypes from 'prop-types';
import BlogContext from './RentContext';

function RentProvider({ children }) {

  const objValue = {
  };

  return (
    <BlogContext.Provider value={ objValue }>
      {children}
    </BlogContext.Provider>
  );
}

RentProvider.propTypes = {
  children: propTypes.shape({}).isRequired
}

export default RentProvider;