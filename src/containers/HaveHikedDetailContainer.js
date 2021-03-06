import React from 'react'
import HaveHikedDetail from '../components/HaveHikedDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import MapContainer from '../components/MapContainer'
import ShowPhotosList from '../components/ShowPhotosList'
import { Divider, Segment } from 'semantic-ui-react'

class HaveHikedDetailContainer extends React.PureComponent {

  state = {
    lat: 0,
    lng: 0,
    center: {}
  }


  componentDidMount = () => {
    this.checkingHikeDetail()
  }

  checkingHikeDetail = () => {
    console.log(this.props.hikeDetail);
    if(this.props.hikeDetail === undefined){
      this.setState({
        lat: 59.95,
        lng: 30.33
    })

    }else{
      this.setState({
        lat: this.props.hikeDetail.latitude,
        lng: this.props.hikeDetail.longitude
      })
    } this.settingCenter(this.props.hikeDetail.latitude, this.props.hikeDetail.longitude )
  }

  settingCenter = (lat, lng) => {
    this.setState({
      center: {lat, lng}
    })
  }


  render () {
    //console.log(this.props);

    return (
     <Segment>
       <HaveHikedDetail
       hikeDetail={this.props.hikeDetail}
       handleAddComment={this.props.handleAddComment}
       handleAddAPhoto={this.props.handleAddAPhoto}/>
       <Divider horizontal></Divider>
        <ShowCommentsList
        comments={this.props.comments} />
      <Divider horizontal></Divider>
      <ShowPhotosList
        photos={this.props.photos} />
      <Divider horizontal></Divider>
        <MapContainer
        center={this.state.center}
        />
     </Segment>

    )
  }
}

export default HaveHikedDetailContainer
