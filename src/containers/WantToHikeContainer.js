import React from 'react'
import WantToHikeList from '../components/WantToHikeList'


// import HaveHiked from '../components/HaveHiked'
// import WantToHike from '../components/WantToHike'

import '../App.css'

class WantToHikeContainer extends React.PureComponent {

  render () {
    // console.log(this.props);
    // console.log("in WantTohike container");

    return (
      <div>
      <WantToHikeList
      userWants={this.props.userWants}
      handleWantToHikeDetail={this.props.handleWantToHikeDetail}
      handleHikedIt={this.props.handleHikedIt}
      />
      </div>
    )
  }
}

export default WantToHikeContainer
