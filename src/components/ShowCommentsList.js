import React from 'react'
import ShowComments from './ShowComments'

const ShowCommentsList = (props) => {
  console.log(props);

  const renderComments = () =>  props.comments.map(comment => <ShowComments key={comment.id}
  comment={comment} />)

  return (
    <div>
      <h1>Comments!</h1>
      {renderComments()}
    </div>
  )



}

export default ShowCommentsList
