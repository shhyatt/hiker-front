import React from 'react'
import HaveHikedDetail from '../components/HaveHikedDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import ShowPhotosList from '../components/ShowPhotosList'
import { Divider, Segment } from 'semantic-ui-react'

class HaveHikedDetailContainer extends React.Component {

  render () {
    //console.log(this.props);

    return (
     <Segment>
       <HaveHikedDetail
       hikeDetail={this.props.hikeDetail}/>
       <Divider horizontal></Divider>
       <ShowCommentsList
        comments={this.props.comments} />
        <Divider horizontal></Divider>
      <ShowPhotosList
        photos={this.props.photos} />
     </Segment>

    )
  }
}

export default HaveHikedDetailContainer
