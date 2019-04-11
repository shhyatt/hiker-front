import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Card, Image, Button, Icon } from 'semantic-ui-react'

class WantToHike extends React.Component {


  render () {
    //console.log(this.props.trail);
    return (
      <React.Fragment>
          <Card>
            <Card.Content onClick={() => this.props.handleWantToHikeDetail(this.props.trail)} as={Link} to={"/wanttohikedetail"}>
            <Card.Header>{this.props.trail.name}</Card.Header>
            <h5>{this.props.trail.location}</h5>
            <h5>{this.props.trail.summary}</h5>
            <Image src={this.props.trail.imgSmall} style={{width:'150px'}} alt={this.props.trail.name}/>
            </Card.Content>
          <Button>
            <Icon name='check' />
            <p>I Hiked it!</p>
          </Button>
          </Card>
      </React.Fragment>
    )
  }

}

export default WantToHike
