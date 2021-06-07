import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../hocs/Form1'
import DropDown from './DropDown'
import BarCard from './cards/BarCard'

// This component utilizes the data returned as the results of a particular field
// to display the results to the user. It accesses the Form context, thus gaining
// access to all fields and errors, furthermore, it will take id from props to
// allow it to determine specifically what field it is and also what results it
// should display

// The resutls

const Hits = (props) => {
  //   accesses id from props
  const { id } = props

  // accesses the fields from the Form's context, so that the specific field
  // making the hits can be determined
  const { fields } = useContext(FormContext)

  // extracts the field data from the form context based on the id of the field, found inside props
  const field = fields[id] || {}
  console.log('This is the field being passed to hits', field)
  //   accesses the field's value, so that it knows when the value updates
  const { value } = field

  // defines a state which will hold the results in an array
  const [hits, setHits] = useState([])

  // defines a state which will hold the display states of the results in an array
  const [listOfHits, setListOfHits] = useState([])

  // maps over the results inside hits and displays them nicely,
  // these displays are then stored inside the listOfHits state array
  const createListOfHits = () => {
    // this array will be pushed to state, and is only declared so that the state is not directly
    // altered, which may cause errors
    const hitList = []

    hits.map((hit) => {
      // destructure the title and description from each result in the hit array
      const { title, description, date_created } = hit

      // creates a stylized display with the response's data to return
      hitList.push(
        <div className='py-0.5'>
          <BarCard
            title={title}
            description={description}
            key={Math.random(z)}
            date_created={date_created}
          />
        </div>
      )
    })

    //   places the array of stylized data as the listOfHit state
    setListOfHits(hitList)
  }

  useEffect(() => {
    // access the results returned from the field
    const { results } = field

    // place the results inside the state hits array
    setHits(results)

    // the following if statement ensures that there are responses to show
    // before the list of hit display is created
    if (hits !== undefined) {
      // calls the mapping function to create the displays for the hits
      createListOfHits()
    } else {
      console.log('no hits to show yet')
    }
  }, [value, id])

  return value !== '' ? (
    <div className='flex md:w-50 w-15'>
      <div className='w-full'>
        {/* <!-- Dropdown menu --> */}
        <div className='z-20 mt-0.5 overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800'>
          <div className=''>{listOfHits}</div>
          <a
            href='#'
            className='block py-0.5 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline'
          >
            See all notifications
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className='text-white-pale'>...</div>
  )
}

export default Hits
