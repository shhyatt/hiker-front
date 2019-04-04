import React from 'react'
import HikeList from '../components/HikeList'

class HikeContainer extends React.Component {

  render () {
    //console.log(this.props.hikes);
    return (
      <div>
        <h3>HikeContainer</h3>
        <HikeList
        hikes={this.props.hikes}/>
      </div>
    )
  }
}

export default HikeContainer
