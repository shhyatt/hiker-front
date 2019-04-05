import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

const Hike = (props) => {
  //console.log(props.hike.name);
  return (
  <React.Fragment>
    <Card>
      <Card.Content>
      <h5>{props.hike.name}</h5>
      <h5>{props.hike.location}</h5>
      <h5>{props.hike.summary}</h5>
      </Card.Content>
      <img src={props.hike.imgSmall} style={{width:'70px'}} alt={props.hike.name}/>
      </Card>
    </React.Fragment>
  )

}

export default Hike
