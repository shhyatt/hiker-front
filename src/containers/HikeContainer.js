import React from 'react'
import HikeList from '../components/HikeList'

class HikeContainer extends React.Component {

  render () {
    console.log(this.props.hikes.trails);
    return (
      <div>
        <h3>HikeContainer</h3>
        <HikeList
        hikes={this.props.hikes.trails}/>
      </div>
    )
  }
}

export default HikeContainer
