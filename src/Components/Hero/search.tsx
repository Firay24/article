import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (value === '') {
      onSearch('')
    }
  };

  const handleButton = () => {
    onSearch(searchTerm)
  }

  return (
    <div className='mt-5'>
      <form className='mx-auto text-center flex justify-center'>
        <div className="relative lg:w-1/2 xl:1/2 w-4/5">
          <div className="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch />
          </div>
          <input 
            type="search" 
            id="default-search" 
            onChange={handleInputChange}
            value={searchTerm}
            className="block w-full p-4 pr-24 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search article..." 
            required
          />
          <button type="button" onClick={handleButton} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search