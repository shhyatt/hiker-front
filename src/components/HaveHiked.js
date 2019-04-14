import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Card, Image, Button, Icon } from 'semantic-ui-react'

class HaveHiked extends React.Component {


  render () {
    //console.log(this.props);
    return (

      <React.Fragment>
          <Card>
            <Card.Content onClick={() => this.props.handleHaveHikedDetail(this.props.trail)} as={Link} to={"/havehikeddetail"}>
            <Card.Header>{this.props.trail.name}</Card.Header>
            <h5>{this.props.trail.location}</h5>
            <h5>{this.props.trail.summary}</h5>
            <Image src={this.props.trail.imgSmall} style={{width:'150px'}} alt={this.props.trail.name}/>
            </Card.Content>
          <Button onClick={() => this.props.handleAddComment(this.props.trail.id)}as={Link} to={"/commentform"}>
            <Icon name='comments outline' />
            <p>Add A Comment!</p>
          </Button>
          <Button onClick={() => this.props.handleAddAPhoto(this.props.trail.id)}as={Link}to={"/photoform"}>
            <Icon name='image' />
            <p>Add A Photo!</p>
          </Button>
          </Card>
      </React.Fragment>
     )
  }

}

export default HaveHiked
