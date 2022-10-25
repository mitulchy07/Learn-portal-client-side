import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../Categories/Categories/Categories';

const LeftSideNav = () => {
  return (
    <div>
      <Link to='/courses'>All Course</Link>
      <Categories></Categories>
    </div>
  );
};

export default LeftSideNav;
