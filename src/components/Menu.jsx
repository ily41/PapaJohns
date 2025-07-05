import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router'
import Item from './Item'

const Menu = () => {
  const {data,addBasket,deleteFromBasket}  = useOutletContext()

  
  
    
  return (
    <div>
        <h2 className = "">Menu</h2>
        <Container>
            <Row xs={1} md={4} className="g-4">
              {data.pizza.map((item, idx) => (
                <Col key={idx}>
                  <Item data = {item} addBasket={addBasket}    />
                </Col>
              ))}
            </Row>
        </Container>
    </div>
  )
}

export default Menu