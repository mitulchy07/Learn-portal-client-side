import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <div>
      <div>
        <Link
          className='btn my-3 menu p-4 bg-base-100'
          to={`/categories/${category.id}`}
        >
          {category.name}
        </Link>
      </div>
    </div>
  );
};

export default Category;
