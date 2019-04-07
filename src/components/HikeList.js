import React from 'react'
import Hike from './Hike'
import { Button } from 'semantic-ui-react'

const HikeList = ({hikes}) => {



  const renderHikes = () => {
    //console.log(hikes);

    if(hikes.trails !== undefined){
      let newHikes = hikes.trails.map(hike => <Hike
        key={hike.id}
        hike={hike}
         />)

      return newHikes
    } else return null

  }


  return (
    <div>
    <h1>Pick A Hike</h1>
    <Button.Group>
    {renderHikes()}
    </Button.Group>

    </div>
  )
}

export default HikeList
