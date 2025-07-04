import React, { useState } from 'react'
import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { useOutletContext } from 'react-router'

const Item = ({data: {name,img,desc,price}}) => {
    const {quantity,setQuantity} = useOutletContext()
    const [sizePrice, setSizePrice] = useState(Object.keys(price)[0 ])
    
    
    const path = './Public/Assets/Img/'

    
    const size = {
      xs:"Mini, 6sm", 
      sm:"Kiçik, 23sm", 
      md:"Orta, 30sm", 
      lg: "Boyuk, 35sm"
    }

  return (
    <Card>
      <Card.Img variant="top" src={path + img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Form.Select onChange={e => {setSizePrice(e.target.value)}}>
          {Object.keys(price).map((item,idx) => <option key = {idx} value={item} >{size[item]}</option>)}
        </Form.Select>
        <div className='d-flex space-between align-items-center py-3'>
          <InputGroup className="">
            <Button onClick={() => {quantity > 1 ? setQuantity(prev => prev-=1) : quantity}} variant="outline-secondary">-</Button>
              <span className='p-2'>{quantity}</span>
            <Button onClick={() => {setQuantity(prev => prev+=1)}} variant="outline-secondary">+</Button>
          </InputGroup>
          <h5>{quantity*price[sizePrice]}$</h5>
        </div>
        <div className='d-grid gap-2'>
          <Button  variant="warning">Eat me!</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item