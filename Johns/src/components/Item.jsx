import React from 'react'
import { Card } from 'react-bootstrap'

const Item = ({data: {name,img,desc}}) => {
    
    const path = './Public/Assets/Img/'
  return (
    <Card>
      <Card.Img variant="top" src={path + img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item