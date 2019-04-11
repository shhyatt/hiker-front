import React from 'react'

import WantToHike from './WantToHike'

import { Card } from 'semantic-ui-react'

const WantToHikeList = ({ userWants }) => {

  //console.log("in Want To Hike List");

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
    {renderWantHikes()}
    </Card.Group>

    </div>
  )
}

export default WantToHikeList
