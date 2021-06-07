import React, { useEffect } from 'react'

const BarCard = (props) => {
  // access the title and description from props
  const { title, description, date_created } = props
  console.log(
    'this is the date  ',
    date_created,
    '  and this is the type ',
    typeof date_created
  )

  //   a function to nicely format the date returned from the server
  const formatDate = (unformattedDate) => {
    //   searches for the occurrence of T, note that the date is returned in like so: 2021-06-03T10:33:27Z
    // only the values before the T - standing for Time - are needed, this returns the position of T
    const positionOfExtra = unformattedDate.search('T')

    // the date is then sliced, to extract all of the characters before the T, i.e., the YYYY-MM-DD value
    const formattedDate = unformattedDate.slice(0, positionOfExtra)

    return formattedDate
  }

  return (
    <div className='flex flex-grow w-full h-5 mx-auto overflow-hidden transition duration-200 bg-white rounded-lg shadow-lg md:h-10 bg-white-pale hover:bg-opacity-40 hover:shadow-inner dark:bg-gray-800'>
      {/* image on left */}
      <div
        className='w-1/3 bg-cover'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
        }}
      ></div>
      {/* all the text */}
      <div className='w-2/3 p-0.5 md:p-0.5'>
        {/* title */}
        <h1 className='font-bold text-gray-800 md:text-2xl text-md dark:text-white'>
          {title}
        </h1>

        <p className='mt-0.5 text-sm tracking-tighter text-gray-600 dark:text-gray-400'>
          {description}
        </p>

        {/* date and button */}
        <div className='flex justify-between mt-1 item-center'>
          <h1 className='font-semibold text-gray-700 text-md dark:text-gray-200 md:text-md'>
            {/* the date returned from the server is formatted before it is displayed */}
            {formatDate(date_created)}
          </h1>
          <button className='px-0.5 py-0.5 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default BarCard
