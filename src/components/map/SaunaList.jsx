'use client'
import React, { useState } from 'react';
import SaunaDetails from './SaunaDetails';

const SaunaList = ({ sauny }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  const handlePageClick = (pageIndex) => {
    setStartIndex(pageIndex * 5);
    setEndIndex((pageIndex + 1) * 5);
  };

  const pageCount = Math.ceil(sauny.length / 5);
  const pageArray = [...Array(pageCount).keys()];

  const displayedSaunas = sauny.slice(startIndex, endIndex);

  return (
    <div className='sm:mr-[10px]'>
      {displayedSaunas.map((sauna) => (
        <SaunaDetails key={sauna.name} sauna={sauna} />
      ))}
      <div className='flex justify-center items-center mt-4'>
        <div className='flex space-x-2'>
          {pageArray.map((pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              className={`px-2 py-1 rounded-md ${
                startIndex / 5 === pageIndex ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handlePageClick(pageIndex)}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaunaList;
