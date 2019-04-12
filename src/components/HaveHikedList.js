import React from 'react'

import HaveHiked from './HaveHiked'

import { Card } from 'semantic-ui-react'

const HaveHikedList = ({ userHaves, handleHaveHikedDetail, handleAddComment }) => {



  const renderHaveHiked = () => {
    if(userHaves.trails !== undefined){
      let haveHiked = userHaves.trails.map(trail => <HaveHiked
          key={trail.id}
          trail={trail}
          handleHaveHikedDetail={handleHaveHikedDetail}
          handleAddComment={handleAddComment}
           />)
        return haveHiked
      } else return null
  }
  return (
    <div>
    <h1>Pick A Hike</h1>
    <Card.Group>
    {renderHaveHiked()}
    </Card.Group>

    </div>
  )
}

export default HaveHikedList
