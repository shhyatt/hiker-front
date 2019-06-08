import React from 'react'
import { Item } from 'semantic-ui-react'
import ShowComments from './ShowComments'

const ShowCommentsList = (props) => {
  console.log(props);

  const renderComments = () =>  props.comments.map(comment => <ShowComments key={comment.id}
  comment={comment} />)

  return (
    <div>
      <Item.Group divided>
      {renderComments()}
      </Item.Group>
    </div>

  )



}

export default ShowCommentsList
