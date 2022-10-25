import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <div>
      <h1>
        <Link to={`/courses/${category.id}`}>{category.name}</Link>{' '}
      </h1>
    </div>
  );
};

export default Category;
