import React from 'react'
import HikeDetail from '../components/HikeDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import { Divider, Segment } from 'semantic-ui-react'
import ShowPhotosList from '../components/ShowPhotosList'

class HikeDetailContainer extends React.Component {

  render () {
    //console.log(this.props);

    return (
     <Segment>
       <HikeDetail
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

export default HikeDetailContainer
