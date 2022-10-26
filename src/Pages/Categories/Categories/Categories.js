import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://server-site.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
};

export default Categories;
