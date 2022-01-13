import React from 'react';

const Categories = ({categories, setCategory}) => {
  return (
    <>
      {categories.map((category, index) => <button key={index} onClick={()=> setCategory(category)} className='filter-btn' type='button'>{category}</button>)}
    </>
  );
};

export default Categories;
