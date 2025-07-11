import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router'
import Item from './Item'

const Menu = () => {

    const {pizza} = useOutletContext()
  return (
    <div>
        <h2 className = "">Menu</h2>
        <Container>
            <Row xs={1} md={2} className="g-4">
              {pizza.map((item, idx) => (
                <Col key={idx}>
                  <Item data = {item}/>
                </Col>
              ))}
            </Row>
        </Container>
    </div>
  )
}

export default Menu