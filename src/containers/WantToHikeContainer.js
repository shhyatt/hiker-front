import React from 'react'
import WantToHikeList from '../components/HikeList'

// import HaveHiked from '../components/HaveHiked'
// import WantToHike from '../components/WantToHike'

import '../App.css'

class WantToHikeContainer extends React.Component {

  render () {
    console.log(this.props);
    console.log("in WantTohike container");

    return (
      <WantToHikeList
      userWants={this.props.userWants}
      />
    )
  }
}

export default WantToHikeContainer
