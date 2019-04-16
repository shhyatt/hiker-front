import React from 'react'
import Marker from './Marker'
import GoogleMapReact from 'google-map-react';


class MapContainer extends React.Component {

  static defaultProps = {
    zoom: 11
  }


  render () {
    console.log(this.props.center.lat);


    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAu0ammJhWj0yZuuv0v-giFZmCBIZwDnJU'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text='Here'
             />
          </GoogleMapReact>
        </div>
      )
  }

}

export default MapContainer
