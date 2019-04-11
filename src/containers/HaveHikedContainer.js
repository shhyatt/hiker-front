import React from 'react'
import HaveHikedList from '../components/HaveHikedList'

// import HaveHiked from '../components/HaveHiked'
// import WantToHike from '../components/WantToHike'

import '../App.css'

class HaveHikedContainer extends React.Component {

  render () {
    // console.log(this.props);


    return (
      <HaveHikedList
      userHaves={this.props.userHaves}
      handleHaveHikedDetail={this.props.handleHaveHikedDetail}
      />
    )
  }
}

export default HaveHikedContainer
