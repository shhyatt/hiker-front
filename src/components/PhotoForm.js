import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PhotoForm = (props) => {
  //console.log(props);

  return (

        <Form>
          <Form.Field>
            <label>Your Photo:</label>
            <input type="text" onChange={(e) => props.handlePhoto(e)}/>
            <Button onClick={props.handlePostPhoto} as={Link} to={"/havehiked"}>
              <p>Post Your Photo!</p>
            </Button>
          </Form.Field>
         </Form>
  )

}

export default PhotoForm
