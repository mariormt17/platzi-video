import React, { Children } from 'react';
import '../assets/styles/components/Category.scss'

const Category = ({ children, title }) => {
  return (
    <div className="category">
      <h3 className="category__title">{title}</h3>
      {children}
    </div>
  );
};

export default Category;