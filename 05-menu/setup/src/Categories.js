import React from 'react';

const Categories = ({ categories, selectCategory }) => {
  return (
    <div className="btn-container">
      {
        categories.map(category => {
          return <button type="button" className="filter-btn" key={category} onClick={() => selectCategory(category)}>{category}</button>
        })
      }
    </div>
  );
};

export default Categories;
