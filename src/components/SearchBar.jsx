import React from 'react'
import searchIcon from '../assets/search.png'
import plusIcon from '../assets/plus.png'

function SearchBar({openPopup}) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search submitted');
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <div className='search-bar flex space-x-3'>
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit}>
        <div className='relative'>
          <img className='absolute w-9 h-9 left-4 top-3' alt='search' src={searchIcon} />
          <input 
            className='outline-none w-searchBar border border-primary rounded-lg h-16 w-searchBar pl-16 pr-8 text-xl font-medium' 
            type='text' 
            placeholder='find the fix that saved you career...' 
          />
        </div>
      </form>

      {/* Add Entry Button */}
      <button 
        className='text-lg cursor-pointer flex items-center justify-center space-x-4 font-bold text-secondary bg-violet hover:bg-violet-600 transition-colors rounded-lg h-16 w-44' 
        type='button'
        onClick={handleAddEntry}
      >
        <img className='h-6 w-6' alt='plus' src={plusIcon} />
        <span>Add Entry</span>
      </button>
    </div>
  )
}

export default SearchBar