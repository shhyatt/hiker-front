import React from 'react'
import Hike from './Hike'
import { Card } from 'semantic-ui-react'

const HikeList = ({hikes, likedHikes, haveHiked }) => {


  const renderHikes = () => {

    if(hikes.trails !== undefined){

      let newHikes = hikes.trails.map(hike => <Hike
        key={hike.id}
        hike={hike}
        likedHikes={likedHikes}
        haveHiked={haveHiked}
         />)

      return newHikes
    } else return null
  }

  return (
    <div>
    <h1>Pick A Hike</h1>
    <Card.Group>
    {renderHikes()}
    </Card.Group>

    </div>
  )
}

export default HikeList
