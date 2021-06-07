import React from 'react'

import Form1 from '../hocs/Form1'
import TextInput1 from '../partials/TextInput1'
import Hits from '../partials/Hits'
import DropDown from '../partials/DropDown'
import ResultsDisplay from '../partials/ResultsDisplay'

const Home = () => {
  return (
    <section className='relative w-auto h-auto '>
      <div className='flex flex-col w-full h-full'>
        {/* The title */}
        <h1 className='text-xl font-semibold tracking-wide text-white md:tracking-wider md:text-3xl md:font-bold bg-blue-lightbackground'>
          Volare
        </h1>
        <div className='w-screen'>
          {/* The text input and hits wrapped inside Form for context */}
          <Form1 className='w-full h-full'>
            <div className='flex flex-col items-center justify-center w-full h-screen bg-blue-lightbackground'>
              <TextInput1
                id='test'
                placeholder='testing'
                validate='numeric'
                events={{
                  onChange: (data) => console.log(data),
                  onFocus: (val) => console.log('focused!'),
                  onBlur: (value) => console.log('blurred!'),
                }}
              />
              <Hits id='test' />
            </div>
            <div className='w-full mt-20 bg-white-pale'>
              <ResultsDisplay id='test' />
            </div>
          </Form1>
        </div>
      </div>
    </section>
  )
}

export default Home
