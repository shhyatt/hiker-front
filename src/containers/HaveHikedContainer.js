import React from 'react'
import HaveHikedList from '../components/HaveHikedList'
import '../App.css'

class HaveHikedContainer extends React.Component {

  render () {
    // console.log(this.props);

    return (
      <HaveHikedList
      userHaves={this.props.userHaves}
      handleHaveHikedDetail={this.props.handleHaveHikedDetail}
      handleAddComment={this.props.handleAddComment}
      />
    )
  }
}

export default HaveHikedContainer
