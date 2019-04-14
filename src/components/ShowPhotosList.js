import React from 'react'
import ShowPhotos from './ShowPhotos'
import { Card } from 'semantic-ui-react'

const ShowPhotosList = (props) => {
  console.log(props);

  const renderPhotos = () =>  props.photos.map(photo => <ShowPhotos key={photo.id}
  photo={photo} />)

  return (
    <div>
    <h3>Photos!</h3>
    <Card.Group>
     {renderPhotos()}
    </Card.Group>
    </div>
  )



}

export default ShowPhotosList
