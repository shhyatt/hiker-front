import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const CommentForm = (props) => {
  //console.log(props);

  return (
        <Form>
          <Form.Field>
            <label>Your Comment:</label>
            <input type="text" onChange={(e) => props.handleComment(e)}/>
            <Button onClick={props.handlePostComment}>
              <p>Post Your Comment!</p>
            </Button>
          </Form.Field>
         </Form>
  )

}

export default CommentForm
