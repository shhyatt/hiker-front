import React from 'react'

import WantToHike from './WantToHike'

import { Card } from 'semantic-ui-react'

const WantToHikeList = ({ userWants, handleWantToHikeDetail, handleHikedIt }) => {

  //console.log("in Want To Hike List");

  const renderWantHikes = () => {
    if(userWants.trails !== undefined){
      let wantHikes = userWants.trails.map(trail => <WantToHike
          key={trail.id}
          trail={trail}
          handleWantToHikeDetail={handleWantToHikeDetail}
          handleHikedIt={handleHikedIt}
           />)
        return wantHikes
      } else return null
  }
  return (

    <div>
    {userWants.length === 0 ?
    <h2>Find Some Hikes! Click Search to the Left!</h2> :
    <Card.Group>
    {renderWantHikes()}
    </Card.Group>}
    </div>
  )
}

export default WantToHikeList
