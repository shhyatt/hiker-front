import React from 'react'
import HikeDetail from '../components/HikeDetail'
import ShowCommentsList from '../components/ShowCommentsList'
import MapContainer from '../components/MapContainer'
import { Divider, Segment } from 'semantic-ui-react'
import ShowPhotosList from '../components/ShowPhotosList'

class HikeDetailContainer extends React.PureComponent {

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
       <HikeDetail
       hikeDetail={this.props.hikeDetail}
       haveHiked={this.props.haveHiked}
       likeHike={this.props.likedHikes}/>
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

export default HikeDetailContainer
