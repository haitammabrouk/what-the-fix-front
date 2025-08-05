import React from 'react'
import searchIcon from '../assets/search.png'
import plusIcon from '../assets/plus.png'

function SearchBar() {
  return (
    <form className='search-bar flex space-x-3'>
     <div className='relative'>
        <img className='absolute w-9 h-9 left-4 top-3' alt='search' src={searchIcon} />
        <input className='outline-none w-searchBar border border-primary rounded-lg h-16 w-searchBar px-16 text-xl font-medium' 
            type='text' placeholder='find the fix that saved you career...' />
     </div>
      <button className='text-lg cursor-pointer flex items-center justify-center space-x-4 font-bold text-secondary bg-violet rounded-lg h-16 w-44' type='submit'>
        <img className='h-6 w-6' alt='plus' src={plusIcon} />
        <span>Add Entry</span>
      </button>
    </form>
  )
}

export default SearchBar
