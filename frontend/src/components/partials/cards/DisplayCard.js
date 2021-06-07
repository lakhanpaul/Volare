import React from 'react'

const DisplayCard = (props) => {
  const { description, title, date_created } = props

  return (
    <div className='flex flex-col items-start w-20 p-3 md:w-1/2'>
      <span className='inline-block py-0.125 px-0.5 rounded bg-indigo-50 text-indigo-500 text-xs font-light md:font-medium tracking-tight md:tracking-widest'>
        CATEGORY
      </span>
      <h2 className='mt-1 mb-1 text-xl font-medium text-gray-900 md:text-3xl title-font'>
        {title}
      </h2>
      <p className='mb-2 text-xs leading-relaxed md:text-base'>{description}</p>
      <div className='flex flex-wrap items-center w-full pb-1 mt-auto mb-1 border-b-2 border-gray-100'>
        <a className='inline-flex items-center text-indigo-500'>
          Learn More
          <svg
            className='w-1 h-1 ml-0.5'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLineCap='round'
            strokeLineJoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </a>
        <span className='text-gray-400 mr-1 inline-flex items-center ml-auto leading-none text-sm pr-1 py-0.125 border-r-2 border-gray-200'>
          <svg
            className='w-1 h-1 mr-0.25'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLineCap='round'
            strokeLineJoin='round'
            viewBox='0 0 24 24'
          >
            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
            <circle cx='12' cy='12' r='3'></circle>
          </svg>
          1.2K
        </span>
        <span className='inline-flex items-center text-sm leading-none text-gray-400'>
          <svg
            className='w-1 h-1 mr-0.25'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLineCap='round'
            strokeLineJoin='round'
            viewBox='0 0 24 24'
          >
            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
          </svg>
          6
        </span>
      </div>
      <a className='inline-flex items-center'>
        <img
          alt='blog'
          src='https://dummyimage.com/104x104'
          className='flex-shrink-0 object-cover object-center w-3 h-3 rounded-full'
        />
        <span className='flex flex-col flex-grow pl-1'>
          <span className='font-medium text-gray-900 title-font'>
            Holden Caulfield
          </span>
          <span className='text-gray-400 text-xs tracking-widest mt-0.125'>
            UI DEVELOPER
          </span>
        </span>
      </a>
    </div>
  )
}

export default DisplayCard
