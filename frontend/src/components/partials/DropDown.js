import React from 'react'
import BarCard from '../partials/cards/BarCard'

const DropDown = () => {
  return (
    <div className='flex flex-col'>
      <section>
        <div className='relative'>
          {/* <!-- Dropdown toggle button --> */}
          <button className='relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none'>
            <svg
              className='w-1 h-1 text-gray-800 dark:text-white'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div className='z-20 w-20 mt-2 overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800'>
            <div className='py-2'>
              <BarCard />
            </div>
            <a
              href='#'
              className='block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline'
            >
              See all notifications
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DropDown
