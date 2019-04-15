import React from 'react'
import WantToHikeDetail from '../components/WantToHikeDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import ShowPhotosList from '../components/ShowPhotosList'
import { Divider, Segment } from 'semantic-ui-react'

class WantToHikeDetailContainer extends React.PureComponent {

  render () {
    //console.log(this.props);

    return (
     <Segment>
       <WantToHikeDetail
       hikeDetail={this.props.hikeDetail}
       handleHikedIt={this.props.handleHikedIt}/>
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

export default WantToHikeDetailContainer
