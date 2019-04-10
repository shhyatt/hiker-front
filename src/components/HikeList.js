import React from 'react'
import Hike from './Hike'
import WantToHike from './WantToHike'
import { Card } from 'semantic-ui-react'

const HikeList = ({hikes, likedHikes, userWants}) => {
console.log(userWants);

  const renderHikes = () => {
    if(hikes.trails !== undefined){
      let newHikes = hikes.trails.map(hike => <Hike
        key={hike.id}
        hike={hike}
        likedHikes={likedHikes}
         />)
      return newHikes
    } else return null

  }

  const renderWantHikes = () => {
    if(userWants.trails !== undefined){
      let wantHikes = userWants.trails.map(trail => <WantToHike
          key={trail.id}
          trail={trail}
           />)
        return wantHikes
      } else return null

  }

  return (
    <div>
    <h1>Pick A Hike</h1>
    <Card.Group>
    {renderHikes()}
    {renderWantHikes()}
    </Card.Group>

    </div>
  )
}

export default HikeList
