import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

const Basket = ({setShow,show,basket,quantity,updateBasket}) => {
    
    
  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Over All</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item,idx) => (
                               
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td><img className = "thumb" src = {item.img}></img></td>
                    <td>{item.name}</td>
                    <td>{item.size}</td>
                    <td>{item.price}$</td>
                    <td>
                        <Button onClick={() =>  updateBasket(idx,item.quant-1)} variant="outline-secondary">-</Button>
                            <span className='p-2'>{item.quant}</span>
                        <Button onClick={() =>  updateBasket(idx,item.quant+1)} variant="outline-secondary">+</Button>
                    </td>
                    <td>{item.price*item.quant}$</td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Basket