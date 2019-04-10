import React from 'react'
import HikeList from '../components/HikeList'

// import HaveHiked from '../components/HaveHiked'
// import WantToHike from '../components/WantToHike'

import '../App.css'

class HikeContainer extends React.Component {

  render () {
    console.log(this.props);
    return (
      <HikeList
      hikes={this.props.hikes}
      likedHikes={this.props.likedHikes}
      userWants={this.props.userWants}/>
    )
  }
}

export default HikeContainer
