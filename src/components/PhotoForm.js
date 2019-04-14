import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const PhotoForm = (props) => {
  //console.log(props);

  return (

        <Form>
          <Form.Field>
            <label>Your Photo:</label>
            <input type="text" onChange={(e) => props.handlePhoto(e)}/>
            <Button onClick={props.handlePostPhoto}>
              <p>Post Your Photo!</p>
            </Button>
          </Form.Field>
         </Form>
  )

}

export default PhotoForm
