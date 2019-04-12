import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Button, Divider, Grid, Segment, Image, Icon } from 'semantic-ui-react'

const WantToHikeDetail = (props) => {
  //console.log(props.hikeDetail.id);

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
          <Button onClick={() => props.handleHikedIt(props.hikeDetail.id)} as={Link} to={"/wanttohike"}>
            <Icon name='check' />
            <p>I Hiked it!</p>
          </Button>
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </Segment>


  )



}

export default WantToHikeDetail
