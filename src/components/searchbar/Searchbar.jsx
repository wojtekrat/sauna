import React, { useState } from 'react';

const Searchbar = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onCategoryChange(selectedValue);
  };

  return (
    <div className="flex justify-center items-center p-[5px] bg-white shadow-md w-[100%]">
      <label htmlFor="category" className="text-[16px]">
        Wybierz kategorię postów:
      </label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Wszystkie</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Searchbar;
