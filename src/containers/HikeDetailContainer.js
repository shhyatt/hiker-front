import React from 'react'
import HikeDetail from '../components/HikeDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import { Divider, Segment } from 'semantic-ui-react'

class HikeDetailContainer extends React.Component {

  render () {
    console.log(this.props);

    return (
     <Segment>
       <HikeDetail
       hikeDetail={this.props.hikeDetail}/>
       <Divider horizontal></Divider>
       <ShowCommentsList
        comments={this.props.comments} />
     </Segment>

    )
  }
}

export default HikeDetailContainer
