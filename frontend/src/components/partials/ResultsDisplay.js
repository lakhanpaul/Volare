import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../hocs/Form1'

import BarCard from './cards/BarCard'
import DisplayCard from './cards/DisplayCard'

// This component utilizes the data returned as the resultsDisplay of a particular field
// to display the resultsDisplay to the user. It accesses the Form context, thus gaining
// access to all fields and errors, furthermore, it will take id from props to
// allow it to determine specifically what field it is and also what resultsDisplay it
// should display

// The resutls

const resultsDisplay = (props) => {
  //   accesses id from props
  const { id } = props

  // accesses the fields from the Form's context, so that the specific field
  // making the hits can be determined
  const { fields } = useContext(FormContext)

  // extracts the field data from the form context based on the id of the field, found inside props
  const field = fields[id] || {}
  console.log('This is the field being passed to resultsdisplay', field)
  //   accesses the field's value, so that it knows when the value updates and hasSearched for conditional
  // rendering dependent on whether or not enter was pressed
  const { value, hasSearched } = field

  // defines a state which will hold the resultsDisplay in an array
  const [resultsDisplay, setResultsDisplay] = useState([])

  // defines a state which will hold the display states of the resultsDisplay in an array
  const [listOfResultsDisplay, setListOfResultsDisplay] = useState([])

  // maps over the resultsDisplay inside hits and displays them nicely,
  // these displays are then stored inside the listOfHits state array
  const createListOfResultsDisplay = () => {
    // this array will be pushed to state, and is only declared so that the state is not directly
    // altered, which may cause errors
    const resultsDisplayList = []

    resultsDisplay.map((result) => {
      // destructure the title and description from each result in the hit array
      const { title, description, date_created } = result

      // creates a stylized display with the response's data to return
      resultsDisplayList.push(
        <div className='py-0.5'>
          <DisplayCard
            title={title}
            description={description}
            date_created={date_created}
            key={Math.random()}
          />
        </div>
      )
    })

    //   places the array of stylized data as the listOfHit state
    setListOfResultsDisplay(resultsDisplayList)
  }

  useEffect(() => {
    // access the resultsDisplay returned from the field
    const { results } = field

    // place the resultsDisplay inside the state hits array
    setResultsDisplay(results)
    console.log('results have been displayed', resultsDisplay)
    // the following if statement ensures that there are responses to show
    // before the list of hit display is created
    if (resultsDisplay !== undefined) {
      // calls the mapping function to create the displays for the hits
      createListOfResultsDisplay()
    } else {
      console.log('no results to show yet')
    }
  }, [value, id])

  // this hook checks if the hasSearched property has changed
  // , it then determines if it is true with an if statement, before
  // retrieving the coordinates of the results display's div
  // then the window scrolls to this position
  useEffect(() => {
    if (hasSearched) {
      // accesses the a major parent div of the results display
      const resultsDiv = document.getElementById('results')

      // extracts its coordinates relative to the window
      const resultsRectangle = resultsDiv.getBoundingClientRect()
      console.log('this is the rectangle', resultsRectangle)

      // defines the intended location and behavior of the scroll
      const scrollToOptions = {
        left: resultsRectangle.left,
        top: resultsRectangle.top,
        behavior: 'smooth',
      }

      // scrolls to the specified position where the results start
      window.scrollTo(scrollToOptions)
    }
  }, [hasSearched])

  return hasSearched ? (
    <div className='w-full ' id='results'>
      {/* <!-- Dropdown menu --> */}

      <section className='overflow-hidden text-gray-600 body-font'>
        <div className='flex justify-evenly  md:w-full w-30 p-0.125  md:px-5 md:py-6 mx-auto'>
          {listOfResultsDisplay}
        </div>
      </section>
    </div>
  ) : (
    <div className='text-white-pale'>not yet</div>
  )
}

export default resultsDisplay
