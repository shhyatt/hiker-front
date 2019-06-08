import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Button, Divider, Grid, Segment, Image, Icon } from 'semantic-ui-react'

const HikeDetail = (props) => {

  //console.log(props);

  return (
    <Segment>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Image src={props.hikeDetail.imgMedium} size='large' />
        </Grid.Column>

        <Grid.Column verticalAlign='left'>
          <h3>{props.hikeDetail.name}</h3>
          <p>Location: {props.hikeDetail.location}</p>
          <p>{props.hikeDetail.summary}</p>
          <p>Length: {props.hikeDetail.length}</p>
          <p>Difficulty: {props.hikeDetail.difficulty}</p>
          <p>Elevation Low: {props.hikeDetail.low}</p>
          <p>Elevation High: {props.hikeDetail.high}</p>
          <p>Ascent: {props.hikeDetail.ascent}</p>
          <p>Descent: {props.hikeDetail.descent}</p>
          <Button onClick={() => props.likeHike(props.hikeDetail.id)}>
            <Icon name='thumbs up outline' />
            <p>I want to hike this!</p>
          </Button>
          <Button onClick={() => props.haveHiked(props.hikeDetail.id)}>
            <Icon name='check' />
            <p>I have hiked this!</p>
          </Button>
          <Button as={Link} to={"/hikes"}>
            <Icon name='backward' />
            <p>Go Back to Hikes!</p>
          </Button>
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </Segment>


  )



}

export default HikeDetail
