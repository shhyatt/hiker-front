import React from 'react'
import { Item } from 'semantic-ui-react'


const ShowComments = ({comment}) => {
  //console.log(comment);
  return (
    <Item>
      <Item.Content veritalAlign='left'>{comment.content}</Item.Content>
    </Item>


  )

}

export default ShowComments
