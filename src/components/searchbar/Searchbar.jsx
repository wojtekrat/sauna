import React, { useState } from 'react'

const Searchbar = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onCategoryChange(event.target.value);
  };
  return (
    <div className='flex justify-center items-center p-[5px]'>
      <label htmlFor="category" className='text-[20px]'>Wybierz kategorię postów: </label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Wszystkie</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>`               `
    </div>
  );
}

export default Searchbar
