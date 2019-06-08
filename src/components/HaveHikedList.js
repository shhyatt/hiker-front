import React from 'react'

import HaveHiked from './HaveHiked'

import { Card, Image } from 'semantic-ui-react'

const HaveHikedList = ({ userHaves, handleHaveHikedDetail, handleAddComment, handleAddAPhoto }) => {



  const renderHaveHiked = () => {
    if(userHaves.trails !== undefined){
      let haveHiked = userHaves.trails.map(trail => <HaveHiked
          key={trail.id}
          trail={trail}
          handleHaveHikedDetail={handleHaveHikedDetail}
          handleAddComment={handleAddComment}
          handleAddAPhoto={handleAddAPhoto}
           />)
        return haveHiked
      } else return null
  }
  return (
    <div>
    {userHaves.length === 0 ?
      <h2></h2> :
    <Card.Group>
    {renderHaveHiked()}
    </Card.Group>}

    </div>
  )
}

export default HaveHikedList
