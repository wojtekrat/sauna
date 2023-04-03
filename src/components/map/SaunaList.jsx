'use client'
import React, { useState } from 'react';
import SaunaDetails from './SaunaDetails';

const SaunaList = ({ sauny }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageClick = (pageIndex) => {
    setStartIndex(pageIndex * 5);
    setEndIndex((pageIndex + 1) * 5);
    setSearchQuery('');
  };

  const pageCount = Math.ceil(sauny.length / 5);
  const pageArray = [...Array(pageCount).keys()];

  const displayedSaunas = searchQuery.length < 3
  ? sauny.slice(startIndex, endIndex)
  : sauny.filter(sauna => {
    const nameMatches = sauna.name.toLowerCase().includes(searchQuery.toLowerCase());
    const addressMatches = sauna.address.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatches || addressMatches;
  }).slice(startIndex, endIndex);

  return (
    <div className='mr-[10px]'>
        <input
            type="text"
            placeholder="Wyszukaj sauny po adresie lub nazwie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 m-1 rounded-md border border-gray-300 w-[350px] sm:w-[500px] focus:outline-none focus:border-orange-400"
        />
        <div className='min-h-[650px]'>
          {displayedSaunas.map((sauna) => (
            <SaunaDetails key={sauna.name} sauna={sauna} />
          ))}
        </div>
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
