import React from 'react'
import Hike from './Hike'

const HikeList = (props) => {
  console.log(props.hikes)

  //const renderHikes = (props) = props.hikes.map(hike => console.log(hike)



  return (
    <div>
    <h1>HikeList</h1>
    <Hike />
    </div>
  )
}

export default HikeList
