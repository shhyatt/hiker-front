import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const ShowPhotos = ({photo}) => {
  //console.log(comment);
  return (
    <Card>
      <Card.Content>
        <Image src={photo.img} />
      </Card.Content>
    </Card>

  )

}

export default ShowPhotos
