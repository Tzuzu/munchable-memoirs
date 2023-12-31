// CategoryItem.js

import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ category, imageSrc , setCurrentPage}) => {
  return (
    <div className="category-item" onClick={() => setCurrentPage(category)}>
      <img src={imageSrc} alt={category} />
      <p>{category}</p>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CategoryItem;
