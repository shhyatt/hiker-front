import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

const Hike = ({hike, likedHikes}) => {
  //console.log(hike.id);
  return (
    <React.Fragment>
        <Card>
          <Card.Content>
          <Card.Header>{hike.name}</Card.Header>
          <h5>{hike.location}</h5>
          <h5>{hike.summary}</h5>
          </Card.Content>
        <Image src={hike.imgSmall} style={{width:'150px'}} alt={hike.name}/>
        <Button onClick={() => likedHikes(hike.id)}>
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
