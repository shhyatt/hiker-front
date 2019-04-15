import React from 'react'
import HaveHikedList from '../components/HaveHikedList'
import '../App.css'

class HaveHikedContainer extends React.PureComponent {

  render () {
    // console.log(this.props);

    return (
      <HaveHikedList
      userHaves={this.props.userHaves}
      handleHaveHikedDetail={this.props.handleHaveHikedDetail}
      handleAddComment={this.props.handleAddComment}
      handleAddAPhoto={this.props.handleAddAPhoto}
      />
    )
  }
}

export default HaveHikedContainer
