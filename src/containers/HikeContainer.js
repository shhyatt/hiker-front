import React from 'react'
import HikeList from '../components/HikeList'

// import HaveHiked from '../components/HaveHiked'
// import WantToHike from '../components/WantToHike'

import '../App.css'

class HikeContainer extends React.PureComponent {

  render () {
    // console.log(this.props);
    // console.log("in hike container");

    return (
      <HikeList
      hikes={this.props.hikes}
      likedHikes={this.props.likedHikes}
      handleHikeDetail={this.props.handleHikeDetail}
      haveHiked={this.props.haveHiked} />
    )
  }
}

export default HikeContainer
