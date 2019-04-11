import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'

const Hike = ({hike, likedHikes, haveHiked, handleHikeDetail }) => {
  //console.log(hike);


  return (
    <React.Fragment>
        <Card>
          <Card.Content onClick={() => handleHikeDetail(hike)} as={Link} to={"/hikedetail"}>
          <Card.Header>{hike.name}</Card.Header>
          <h5>{hike.location}</h5>
          <h5>{hike.summary}</h5>
          <Image src={hike.imgSmall} style={{width:'150px'}} alt={hike.name}/>
          </Card.Content>
        <Button onClick={() => likedHikes(hike.id)}>
          <Icon name='thumbs up outline' />
          <p>I want to hike this!</p>
        </Button>
        <Button onClick={() => haveHiked(hike.id)}>
          <Icon name='check' />
          <p>I have hiked this!</p>
        </Button>
        </Card>
    </React.Fragment>
  )

}

export default Hike
