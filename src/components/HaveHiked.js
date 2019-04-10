import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class HaveHiked extends React.Component {


  render () {
    //console.log(this.props);
    return (

      <React.Fragment>
          <Card>
            <Card.Content>
            <Card.Header>{this.props.trail.name}</Card.Header>
            <h5>{this.props.trail.location}</h5>
            <h5>{this.props.trail.summary}</h5>
            </Card.Content>
          <Image src={this.props.trail.imgSmall} style={{width:'150px'}} alt={this.props.trail.name}/>
          </Card>
      </React.Fragment>
     )
  }

}

export default HaveHiked
