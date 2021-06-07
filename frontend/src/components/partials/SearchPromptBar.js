import React from 'react'

const SearchPromptBar = () => {
  return (
    <div>
      This is the search bar which will prompt typing
      <span>type here</span>
      <input
        type='text'
        className='bg-red-500 focus:outline-none focus:ring focus:border-white-pale'
        placeholder='What are you looking for?'
      />
    </div>
  )
}

export default SearchPromptBar
