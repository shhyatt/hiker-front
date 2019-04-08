import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

const Hike = (props) => {
  //console.log(props.hike.name);
  return (
    <React.Fragment>
        <Card>
          <Card.Content>
          <Card.Header>{props.hike.name}</Card.Header>
          <h5>{props.hike.location}</h5>
          <h5>{props.hike.summary}</h5>
          </Card.Content>
        <Image src={props.hike.imgSmall} style={{width:'100px'}} alt={props.hike.name}/>
        <Button>
          <Icon name='thumbs up outline' />
          <p>I want to hike this!</p>
        </Button>
        <Button>
          <Icon name='check' />
          <p>I have hiked this!</p>
        </Button>
        </Card>
    </React.Fragment>
  )

}

export default Hike
