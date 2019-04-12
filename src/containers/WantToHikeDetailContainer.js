import React from 'react'
import WantToHikeDetail from '../components/WantToHikeDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import { Divider, Segment } from 'semantic-ui-react'

class WantToHikeDetailContainer extends React.Component {

  render () {
    //console.log(this.props);

    return (
     <Segment>
       <WantToHikeDetail
       hikeDetail={this.props.hikeDetail}/>
       <Divider horizontal></Divider>
       <ShowCommentsList
        comments={this.props.comments} />
     </Segment>

    )
  }
}

export default WantToHikeDetailContainer
