import React from 'react'
import Hike from './Hike'
import { Button } from 'semantic-ui-react'

const HikeList = ({hikes}) => {
  //console.log(hikes)


  const renderHikes = () => {
    console.log(hikes);
    // return hikes.map(hike => <Hike
    //   key={hike.id}
    //   hike={hike}
    //    />)
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
